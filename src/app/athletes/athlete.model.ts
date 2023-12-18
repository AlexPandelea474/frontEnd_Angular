export interface Athlete {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    isEditing?: boolean; // Optional property for edit mode
  }