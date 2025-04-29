
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  className,
  action 
}: FeatureCardProps) {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg group relative overflow-hidden",
      "bg-[#1e293b] border-gray-800 hover:border-gray-700 rounded-xl",
      className
    )}>
      <div className="absolute h-1 w-0 bg-gradient-to-r from-brand-secondary to-brand-accent top-0 left-0 transition-all duration-300 group-hover:w-full"></div>
      <CardContent className="p-6 flex flex-col gap-4">
        {icon && (
          <div className="text-[#a5b4fc] mb-2">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-white group-hover:text-gray-200">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">
          {description}
        </p>
        {action && (
          <Button 
            variant="ghost" 
            className="mt-4 text-brand-accent hover:text-white hover:bg-transparent p-0 flex items-center gap-2"
            onClick={action.onClick}
          >
            {action.label}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
