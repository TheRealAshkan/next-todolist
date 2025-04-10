'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2 } from "lucide-react"
import {  useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function TodoItem({ id, index, text, onRemove }: { id: string; index: number; text: string; onRemove: (index: number) => void }) {
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
    
      return (
        <Card ref={setNodeRef} style={style} className="flex justify-between items-center px-4 py-2 flex-row" {...attributes} {...listeners}>
          <CardContent className="p-0 m-0">{text}</CardContent>
          <Button variant="ghost" size="icon" onClick={() => onRemove(index)}>
            <Trash2 className="w-4 h-4 text-red-500" />
          </Button>
        </Card>
      );
}
