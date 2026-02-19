
export interface AppNotification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;   // optional auto-dismiss
}