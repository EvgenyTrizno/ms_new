export interface Note {
  id?: number;
  title: string;
  online: boolean;
  time_start?: string | null;
  time_end?: string | null;
  notify?: string | null;
  problem?: string | null;
  duration_note?: number | null;
  file?: string | null;
  special_check: boolean;
  updated_at?: string | null;
  status: Statuses;
  user?: number | null;
  center?: number | null;
  clinic?: number | null;
  doctors: number[];
}

enum Statuses {
  PASSED = "Passed",
  IN_PROCESSING = "In processing",
  REJECTED = "Rejected",
}
