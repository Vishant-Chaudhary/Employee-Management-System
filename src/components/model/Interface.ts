export interface Employee {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface EmployeeState {
    data: Employee[];
    loading: boolean;
}

export interface user {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface userState {
    user: user | null;
    role: "admin" | "employee" | null;
    loading: boolean;
    error: string | null;
}