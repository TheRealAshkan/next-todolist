import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"


export default function TodoInput() {
  return (
    <div className="flex w-full items-center space-x-2">
          <Label htmlFor="framework">فعالیت</Label>
          <Input className="w-full" />
          <Button type="submit">ثبت</Button>
      </div>

  )
}
