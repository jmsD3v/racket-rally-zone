export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  level?: PlayerLevel;
  avatar_url?: string;
  created_at: string;
}

export type UserRole = 'player' | 'organizer' | 'club';

export type PlayerLevel = 'beginner' | 'intermediate' | 'advanced' | 'professional';

export interface Match {
  id: string;
  created_by: string;
  date: string;
  time: string;
  location: string;
  club_id?: string;
  level_required?: PlayerLevel;
  max_players: number;
  current_players: string[];
  status: MatchStatus;
  is_private: boolean;
  description?: string;
  created_at: string;
}

export type MatchStatus = 'open' | 'full' | 'in_progress' | 'completed' | 'cancelled';

export interface Tournament {
  id: string;
  name: string;
  description: string;
  organizer_id: string;
  start_date: string;
  end_date: string;
  format: TournamentFormat;
  max_participants: number;
  entry_fee?: number;
  prize_pool?: number;
  level_restriction?: PlayerLevel;
  status: TournamentStatus;
  location: string;
  created_at: string;
}

export type TournamentFormat = 'round_robin' | 'single_elimination' | 'double_elimination';

export type TournamentStatus = 'upcoming' | 'registration_open' | 'in_progress' | 'completed' | 'cancelled';

export interface Club {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  phone?: string;
  email?: string;
  website?: string;
  courts_count: number;
  amenities?: string[];
  images?: string[];
  rating?: number;
  created_at: string;
}

export interface PlayerStats {
  user_id: string;
  matches_played: number;
  matches_won: number;
  matches_lost: number;
  tournaments_played: number;
  tournaments_won: number;
  win_rate: number;
  current_level: PlayerLevel;
  elo_rating?: number;
  last_updated: string;
}
