export interface Task {
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
    id: number;
    name: string;
    email: string;
    password: string;
    taskCount: TaskCount;
    tasks: Task[];
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