export type Note = {
  id: number;
  title: string;
  online: boolean;
  time_start: string | null;
  time_end: string | null;
  notify: string | null;
  problem: string | null;
  duration_note: number | null;
  file: string | null;
  special_check: boolean;
  created_at: string | null;
  updated_at: string | null;
  status: NoteStatus;
  user: number | null;
  center: number | null;
  clinic: number | null;
  doctors: number[];
};

export enum NoteStatus {
  PASSED = "passed",
  IN_PROCESSING = "In processing",
  REJECTED = "Rejected",
}
