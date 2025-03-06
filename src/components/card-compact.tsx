import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from './ui/card';
import { ReactNode } from 'react';

type CardCompactProps = {
    title: string;
    description?: string;
    content: ReactNode;
    footer?: ReactNode;
    className?: string;
};

const CardCompact = ({
    title,
    description,
    content,
    footer,
    className
}: CardCompactProps) => {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>{content}</CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    );
};

export { CardCompact };
