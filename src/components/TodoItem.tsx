'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GripVertical, Pencil, Save, Trash2 } from "lucide-react"
import {  useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Input } from "./ui/input";

export default function TodoItem(
  { id, index, text,status, onRemove,updateStatus ,editTask} :
  { id: string;
    index: number;
    text: string;
    status: boolean;
    onRemove: (index: number) => void;
    updateStatus: (checked:boolean, index: number) => void;
    editTask: (text:string, index: number) => void;
  }
) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({ id });
    
      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };
      

      const [editMode, setEditMode] = useState(false);
      const [todoText, setTodoText] = useState(text);
      

      return (
        <Card  ref={setNodeRef} style={style} className="flex justify-between items-center px-4 py-2 flex-row" {...attributes} >
            <Checkbox className="w-5 h-5" checked={status ? true : false} onCheckedChange={(checked: boolean) => {
                updateStatus(checked, index)
            }}/>
            <CardContent className="p-0 m-0 text-start w-full">
              {editMode ? <>
                <Input
                  placeholder="یک کار وارد کن..."
                  value={todoText}
                  onChange={(e) => setTodoText(e.target.value)}
                  className="flex-1"
                />
              </> : text}
            </CardContent>
            <div className="flex align-middle justify-center items-center gap-1">
              {editMode ? <>
                <Button variant="ghost" size="icon" onClick={() => {
                   editTask(todoText,index)
                   setEditMode(false)
                }}>
                  <Save  className="w-4 h-4 text-emerald-600" />
                </Button>
              </> : 
                <Button variant="ghost" size="icon" onClick={() => {
                  setTodoText(text)
                  setEditMode(true)
                }}>
                  <Pencil  className="w-4 h-4 text-emerald-600" />
                </Button>}
                
                <Button variant="ghost" size="icon" onClick={() => onRemove(index)}>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
                <Button variant="ghost" size="icon"   {...listeners}>
                  <GripVertical className="w-4 h-4 " />
                </Button>
            </div>
        </Card>
      );
}
