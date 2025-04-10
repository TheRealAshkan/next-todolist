import TodoList from "@/components/TodoList";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>لیست کارها</CardTitle>
        </CardHeader>
        <CardContent>
          <TodoList />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
