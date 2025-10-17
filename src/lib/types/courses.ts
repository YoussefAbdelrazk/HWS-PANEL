export interface ICourse {
  id: number;
  title: string;
  description: string;
  image: string;
  videosCount: number;
  uploadDate: string;
  progressPercent: number;
  status: string;
  isLocked: boolean;
}
