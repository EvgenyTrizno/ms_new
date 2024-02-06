export interface Note {
  id?: number;
  title: string;
  online: boolean;
  time_start?: Date | null;
  time_end?: Date | null;
  notify?: Date | null;
  problem?: string | null;
  duration_note?: number | null;
  file?: string | null;
  special_check: boolean;
  updated_at?: Date | null;
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
