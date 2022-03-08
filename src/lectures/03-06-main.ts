// 1. Partial<Type>: set all properties of type to optional
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

// 2. Required<Type>: set all properties of type to required
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 }; // Error: Property 'b' is missing in type

// 3. Readonly<Type>: set all properties of type to readonly
interface Todo1 {
  title: string;
}

const todo3: Readonly<Todo1> = {
  title: 'Delete inactive users',
};
todo3.title = 'Hello'; // Error: Cannot assign to 'title' because it is a read-only property.

// 4. Record<Keys, Type>: create a record with Keys and value have Type
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

// 5. Pick<Type, Keys>: create new type by pick some Keys in Type
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo2, 'title' | 'completed'>;

const todo5: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// 6. Omit<Type, Keys>: construct a type by picking all properties from Type and then removing Keys
interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

type TodoPreview2 = Omit<Todo3, 'description'>;

const todo6: TodoPreview2 = {
  title: 'Clean room',
  completed: false,
  createAt: 1615544252770,
};

// 7. ReturnType<Type>: constructs a type for return type of function
type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;
