import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


 interface TModelCardProps {
  name: string;
  description: string;
  logo: string;
}

function ModelCard({ name, description, logo }: TModelCardProps) {
  return (
    <div>
      <Card className="h-48 w-80 hover:bg-gray-50">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <Avatar>
              <AvatarImage src={logo} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {name}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p className="flex gap-2">
            Explore <ArrowRight />
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ModelCard;
