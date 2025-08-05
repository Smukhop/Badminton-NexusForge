export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          position: string | null
          level: string | null
          location: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          position?: string | null
          level?: string | null
          location?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          position?: string | null
          level?: string | null
          location?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      matches: {
        Row: {
          id: string
          player1_id: string
          player2_id: string
          player1_score: number
          player2_score: number
          match_date: string
          duration_minutes: number | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          player1_id: string
          player2_id: string
          player1_score: number
          player2_score: number
          match_date: string
          duration_minutes?: number | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          player1_id?: string
          player2_id?: string
          player1_score?: number
          player2_score?: number
          match_date?: string
          duration_minutes?: number | null
          notes?: string | null
          created_at?: string
        }
      }
      training_plans: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          difficulty_level: string
          duration_weeks: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          difficulty_level: string
          duration_weeks: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          difficulty_level?: string
          duration_weeks?: number
          created_at?: string
          updated_at?: string
        }
      }
      coaches: {
        Row: {
          id: string
          profile_id: string
          experience_years: number
          hourly_rate: number | null
          specializations: string[]
          location: string
          latitude: number
          longitude: number
          available: boolean
          rating: number | null
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          experience_years: number
          hourly_rate?: number | null
          specializations: string[]
          location: string
          latitude: number
          longitude: number
          available?: boolean
          rating?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          experience_years?: number
          hourly_rate?: number | null
          specializations?: string[]
          location?: string
          latitude?: number
          longitude?: number
          available?: boolean
          rating?: number | null
          created_at?: string
        }
      }
      tournaments: {
        Row: {
          id: string
          name: string
          description: string | null
          location: string
          latitude: number
          longitude: number
          start_date: string
          end_date: string
          registration_deadline: string
          entry_fee: number | null
          max_participants: number | null
          organizer_id: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          location: string
          latitude: number
          longitude: number
          start_date: string
          end_date: string
          registration_deadline: string
          entry_fee?: number | null
          max_participants?: number | null
          organizer_id: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          location?: string
          latitude?: number
          longitude?: number
          start_date?: string
          end_date?: string
          registration_deadline?: string
          entry_fee?: number | null
          max_participants?: number | null
          organizer_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}