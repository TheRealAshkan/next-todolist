import TodoInput from "@/components/TodoInput";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>فعالیت‌های من</CardTitle>
        </CardHeader>
        <CardContent>
          <TodoInput />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
