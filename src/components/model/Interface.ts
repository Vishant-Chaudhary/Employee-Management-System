export interface Task {
    id: string ;
    title: string;
    description: string;
    date: string;
    category: string;
    active: boolean;
    newTask: boolean;
    completed: boolean;
    failed: boolean;
}

export interface TaskCount {
    active: number;
    completed: number;
    failed: number;
    newTask: number;
}

export interface Employee {
    id: string;
    name: string;
    email: string;
    password: string;
    taskCount: TaskCount;
    tasks: Task[];
}

export interface EmployeeState {
    data: Employee[];
    loading: boolean;
    error?: string | null;
}

export interface user {
    id: string;
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