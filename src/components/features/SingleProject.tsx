import { FC } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const SingleProject: FC = () => {
    return (
        <Card className="w-[350px] h-[350px]">
            <div className="w-full h-40 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1737089748421-0c5ae99654f5"
                    alt="Project preview"
                    className="w-full h-full object-cover"
                />
            </div>
            <CardHeader>
                <CardTitle>Project Name</CardTitle>
                <CardDescription>Project Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Project Description</p>
            </CardContent>
        </Card>
    )
}