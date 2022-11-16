export interface TableMessage {
  message: Table[];
}

export interface Table {
  hash_id: string;
  type: string;
  attributes: TableAttributes;
  links: any[];
  toggled: boolean;
}

export interface TableAttributes {
  updated_at: string;
  club_name: string;
  club_code: ClubCode;
  logo: string;
  website: null;
  club_exclusive_name: Name;
  team_group: null;
  team_name: string;
  points: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  byes: number;
  position: number;
  forfeits: number;
  has_ladder: boolean;
  fixture_access: Access;
  ladder_access: Access;
  result_access: Access;
  point_adjustment: null;
  points_per_game: string;
  competition_public_display_option: CompetitionPublicDisplayOption;
  upcoming_matches: Match[];
  recent_matches: Match[];
  adjustments: any[];
  team_hash_id: TeamHashID;
  league_hash_id: LeagueHashID;
  club_hash_id: ClubHashID;
  competition_hash_id: CompetitionHashID;
}

export enum ClubCode {
  Anu = "ANU",
  Ntf = "NTF",
  Qpp = "QPP",
  Scs = "SCS",
  UCS = "UCS",
  Wsl = "WSL",
}

export enum Name {
  ANUFutsalClub = "ANU Futsal Club",
  NorthFire = "North Fire",
  QPPower = "QP Power",
  SouthCanberraSwiftFutsalClub = "South Canberra Swift Futsal Club",
  UCStarsFootballClub = "UC Stars Football Club",
  WestLightning = "West Lightning",
}

export enum ClubHashID {
  AnmYAY1MzG = "AnmYAY1mzG",
  BgdMeD2DE2 = "bgdMeD2dE2",
  ERdk47EmGX = "eRdk47EmGX",
  OEN2LQBdqr = "OEN2LQBdqr",
  The8Rmw30EmEJ = "8Rmw30emEJ",
  Vbd9PkeK4R = "vbd9PkeK4R",
}

export enum CompetitionHashID {
  XWdgq1XNRA = "XWdgq1xNRA",
}

export enum CompetitionPublicDisplayOption {
  Standard = "standard",
}

export enum Access {
  Public = "public",
}

export enum LeagueHashID {
  WOme7JwvK0 = "wOme7JwvK0",
}

export interface Match {
  type: RecentMatchType;
  hash_id: string;
  attributes: RecentMatchAttributes;
  counts: any[];
  links: any[];
}

export interface RecentMatchAttributes {
  fixture_updated_at: Date;
  event_updated_at: Date;
  home_team_name: TeamName;
  home_club_exclusive_name: Name;
  home_parsed_name: ParsedName;
  home_team_group: null;
  home_team_code: TeamCode;
  home_team_age_group_name: TeamAgeGroupName;
  home_team_division_name: TeamDivisionName;
  home_club_name: Name;
  home_club_code: ClubCode;
  home_logo: string;
  home_team_gender: TeamGender;
  away_team_name: TeamName;
  away_club_exclusive_name: Name;
  away_parsed_name: ParsedName;
  away_team_group: null;
  away_team_code: TeamCode;
  away_team_age_group_name: TeamAgeGroupName;
  away_team_division_name: TeamDivisionName;
  away_club_name: Name;
  away_club_code: ClubCode;
  away_logo: string;
  away_team_gender: TeamGender;
  league_name: LeagueName;
  league_age_group_name: null;
  league_division_name: null;
  league_result_access: Access;
  competition_name: CompetitionName;
  competition_abbreviation: CompetitionAbbreviation;
  competition_public_display_option: CompetitionPublicDisplayOption;
  publish_status: PublishStatus;
  round_number: number;
  match_type: MatchType;
  display_round_number: DisplayRoundNumber;
  display_type_round_number: DisplayRoundNumber;
  fixture_reference: null;
  type: AttributesType;
  event_status: EventStatus;
  event_name: string;
  date: Date;
  bye_flag: boolean;
  ground_name: GroundName;
  field_name: FieldName;
  base_field_name: BaseFieldName;
  latitude: number;
  longitude: number;
  address: null;
  enable_half_time_scores: boolean;
  home_score?: number;
  home_score_et?: null;
  home_score_et_ht?: null;
  home_score_ht?: number;
  home_score_penalty?: null;
  away_score?: number;
  away_score_et?: null;
  away_score_et_ht?: null;
  away_score_ht?: number;
  away_score_penalty?: null;
  is_forfeit?: boolean;
  allocated_center_referee: boolean;
  allocated_assistant_referee_1: boolean;
  allocated_assistant_referee_2: boolean;
  allocated_fourth_official: boolean;
  allocated_game_leader: boolean;
  has_matchsheet: boolean;
  win_status?: WinStatus;
  fouls_home_half_time?: null;
  fouls_home_full_time?: null;
  fouls_away_half_time?: null;
  fouls_away_full_time?: null;
  home_club_hash_id: ClubHashID;
  home_team_hash_id: TeamHashID;
  home_team_age_group_hash_id: TeamAgeGroupHashID;
  home_team_division_hash_id: TeamDivisionHashID;
  away_club_hash_id: ClubHashID;
  away_team_hash_id: TeamHashID;
  away_team_age_group_hash_id: TeamAgeGroupHashID;
  away_team_division_hash_id: TeamDivisionHashID;
  forfeit_team_hash_id?: null;
  league_hash_id: LeagueHashID;
  competition_hash_id: CompetitionHashID;
  ground_hash_id: GroundHashID;
  field_hash_id: FieldHashID;
  unstructured_fixture_hash_id: null;
}

export enum ParsedName {
  AllAgeMenOpenMen = "All Age Men Open Men",
}

export enum TeamAgeGroupHashID {
  OVdzjZZdGr = "OVdzjZZdGr",
}

export enum TeamAgeGroupName {
  AllAgeMen = "All Age Men",
}

export enum TeamCode {
  Anuaamcflomm = "ANUAAMCFLOMM",
  Ntfaamcflomm = "NTFAAMCFLOMM",
  Qppaamcflomm = "QPPAAMCFLOMM",
  Scsaamcflomm = "SCSAAMCFLOMM",
  Ucsaamcflomm = "UCSAAMCFLOMM",
  Wslaamcflomm = "WSLAAMCFLOMM",
}

export enum TeamDivisionHashID {
  V8DNV5VdwL = "V8dnV5vdwL",
}

export enum TeamDivisionName {
  OpenMen = "Open Men",
}

export enum TeamGender {
  Male = "male",
}

export enum TeamHashID {
  B8NqQPVJN9 = "b8NqQPVJN9",
  The08NOgv8BNZ = "08NOgv8BNZ",
  The08NOgv8NNZ = "08NOgv8nNZ",
  The2PmjJPxZmZ = "2PmjJPxZmZ",
  The7MNGREeEmA = "7MNGREeEmA",
  XWdgga8QdR = "XWdgga8qdR",
}

export enum TeamName {
  ANUFutsalClubAllAgeMenOpenMen = "ANU Futsal Club All Age Men Open Men",
  NorthFireAllAgeMenOpenMen = "North Fire All Age Men Open Men",
  QPPowerAllAgeMenOpenMen = "QP Power All Age Men Open Men",
  SouthCanberraSwiftFutsalClubAllAgeMenOpenMen = "South Canberra Swift Futsal Club All Age Men Open Men",
  UCStarsFootballClubAllAgeMenOpenMen = "UC Stars Football Club All Age Men Open Men",
  WestLightningAllAgeMenOpenMen = "West Lightning All Age Men Open Men",
}

export enum BaseFieldName {
  InternationalCourt1 = "International Court 1",
}

export enum CompetitionAbbreviation {
  Cflm = "CFLM",
}

export enum CompetitionName {
  CapitalFutsalLeagueMenS = "Capital Futsal League Men's",
}

export enum DisplayRoundNumber {
  R1 = "R1",
  R2 = "R2",
  R3 = "R3",
  R4 = "R4",
  R5 = "R5",
}

export enum EventStatus {
  Complete = "complete",
  Pending = "pending",
}

export enum FieldHashID {
  The8ZdBGM5WmB = "8zdBGM5WmB",
}

export enum FieldName {
  DaramalanCollegeInternationalCourt1 = "Daramalan College International Court 1",
}

export enum GroundHashID {
  Bam1VZZNwX = "bam1vZZNwX",
}

export enum GroundName {
  DaramalanCollege = "Daramalan College",
}

export enum LeagueName {
  AllAgeMenOpenMenMale = "All Age Men Open Men Male",
}

export enum MatchType {
  Roundrobin = "roundrobin",
}

export enum PublishStatus {
  Published = "published",
}

export enum AttributesType {
  Match = "match",
}

export enum WinStatus {
  AwayWin = "away-win",
  Draw = "draw",
  HomeWin = "home-win",
}

export enum RecentMatchType {
  Fixtures = "fixtures",
  Results = "results",
}
