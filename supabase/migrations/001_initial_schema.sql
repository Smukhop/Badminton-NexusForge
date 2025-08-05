-- Badminton NexusForge Database Schema
-- This script creates all the necessary tables for the application

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    position TEXT CHECK (position IN ('singles', 'doubles', 'mixed_doubles', 'all')),
    level TEXT CHECK (level IN ('beginner', 'intermediate', 'advanced', 'professional')),
    location TEXT,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create matches table
CREATE TABLE IF NOT EXISTS matches (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    player1_id UUID REFERENCES profiles(id) NOT NULL,
    player2_id UUID REFERENCES profiles(id) NOT NULL,
    player1_score INTEGER NOT NULL DEFAULT 0,
    player2_score INTEGER NOT NULL DEFAULT 0,
    match_date TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INTEGER,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create training_plans table
CREATE TABLE IF NOT EXISTS training_plans (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES profiles(id) NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')) NOT NULL,
    duration_weeks INTEGER NOT NULL DEFAULT 4,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create coaches table
CREATE TABLE IF NOT EXISTS coaches (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    profile_id UUID REFERENCES profiles(id) NOT NULL UNIQUE,
    experience_years INTEGER NOT NULL DEFAULT 0,
    hourly_rate DECIMAL(10,2),
    specializations TEXT[] DEFAULT '{}',
    location TEXT NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    available BOOLEAN DEFAULT true,
    rating DECIMAL(3,2) CHECK (rating >= 0 AND rating <= 5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tournaments table
CREATE TABLE IF NOT EXISTS tournaments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    location TEXT NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    registration_deadline TIMESTAMP WITH TIME ZONE NOT NULL,
    entry_fee DECIMAL(10,2),
    max_participants INTEGER,
    organizer_id UUID REFERENCES profiles(id) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create training_sessions table
CREATE TABLE IF NOT EXISTS training_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    plan_id UUID REFERENCES training_plans(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) NOT NULL,
    session_date TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 60,
    exercises JSONB DEFAULT '[]',
    notes TEXT,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create match_statistics table for detailed match analysis
CREATE TABLE IF NOT EXISTS match_statistics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    match_id UUID REFERENCES matches(id) ON DELETE CASCADE,
    player_id UUID REFERENCES profiles(id) NOT NULL,
    shots_played INTEGER DEFAULT 0,
    shots_won INTEGER DEFAULT 0,
    smashes INTEGER DEFAULT 0,
    drops INTEGER DEFAULT 0,
    clears INTEGER DEFAULT 0,
    net_shots INTEGER DEFAULT 0,
    serves INTEGER DEFAULT 0,
    errors INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_matches_player1 ON matches(player1_id);
CREATE INDEX IF NOT EXISTS idx_matches_player2 ON matches(player2_id);
CREATE INDEX IF NOT EXISTS idx_matches_date ON matches(match_date);
CREATE INDEX IF NOT EXISTS idx_training_plans_user ON training_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_training_sessions_plan ON training_sessions(plan_id);
CREATE INDEX IF NOT EXISTS idx_training_sessions_user ON training_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_coaches_location ON coaches(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_tournaments_date ON tournaments(start_date);
CREATE INDEX IF NOT EXISTS idx_tournaments_location ON tournaments(latitude, longitude);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE match_statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE coaches ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Profiles: users can only see their own profile
CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Matches: users can see matches they participate in
CREATE POLICY "Users can view own matches" ON matches
    FOR SELECT USING (auth.uid() = player1_id OR auth.uid() = player2_id);

CREATE POLICY "Users can insert own matches" ON matches
    FOR INSERT WITH CHECK (auth.uid() = player1_id OR auth.uid() = player2_id);

CREATE POLICY "Users can update own matches" ON matches
    FOR UPDATE USING (auth.uid() = player1_id OR auth.uid() = player2_id);

-- Training plans: users can only see their own plans
CREATE POLICY "Users can view own training plans" ON training_plans
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own training plans" ON training_plans
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own training plans" ON training_plans
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own training plans" ON training_plans
    FOR DELETE USING (auth.uid() = user_id);

-- Training sessions: users can only see their own sessions
CREATE POLICY "Users can view own training sessions" ON training_sessions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own training sessions" ON training_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own training sessions" ON training_sessions
    FOR UPDATE USING (auth.uid() = user_id);

-- Match statistics: users can only see stats for their matches
CREATE POLICY "Users can view own match statistics" ON match_statistics
    FOR SELECT USING (
        auth.uid() = player_id OR 
        EXISTS (
            SELECT 1 FROM matches 
            WHERE matches.id = match_statistics.match_id 
            AND (matches.player1_id = auth.uid() OR matches.player2_id = auth.uid())
        )
    );

CREATE POLICY "Users can insert own match statistics" ON match_statistics
    FOR INSERT WITH CHECK (auth.uid() = player_id);

-- Coaches: public read access, own profile management
CREATE POLICY "Coaches are publicly viewable" ON coaches
    FOR SELECT USING (true);

CREATE POLICY "Users can insert own coach profile" ON coaches
    FOR INSERT WITH CHECK (auth.uid() = (SELECT id FROM profiles WHERE id = profile_id));

CREATE POLICY "Users can update own coach profile" ON coaches
    FOR UPDATE USING (auth.uid() = (SELECT id FROM profiles WHERE id = profile_id));

-- Tournaments: public read access, organizers can manage
CREATE POLICY "Tournaments are publicly viewable" ON tournaments
    FOR SELECT USING (true);

CREATE POLICY "Users can insert tournaments" ON tournaments
    FOR INSERT WITH CHECK (auth.uid() = organizer_id);

CREATE POLICY "Organizers can update own tournaments" ON tournaments
    FOR UPDATE USING (auth.uid() = organizer_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_training_plans_updated_at BEFORE UPDATE ON training_plans
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile when user signs up
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();