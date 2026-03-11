export interface Contact {
  id: string;
  name: string;
  role: 'Family' | 'Doctor' | 'Emergency';
  phoneNumber: string;
  avatar?: string;
}

export interface AppState {
  isHighContrast: boolean;
  fontSize: 'normal' | 'large';
}