/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Button } from './ui/button';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    console.log(index)
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((_, i) => i.toString() === active.id);
      const newIndex = tasks.findIndex((_, i) => i.toString() === over.id);
      setTasks((tasks) => arrayMove(tasks, oldIndex, newIndex));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex w-full items-center space-x-2">
        <Input
          placeholder="یک کار وارد کن..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1"
        />
        <Button onClick={addTask}>اضافه</Button>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tasks.map((_, i) => i.toString())} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {tasks.map((t, i) => (
              <TodoItem key={i} id={i.toString()} index={i} text={t} onRemove={removeTask} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
