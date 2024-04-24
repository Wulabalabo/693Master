import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Collectionspage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Collections</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="text-right">Created at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Laser Lemonade Machine
              </TableCell>
              <TableCell>
                <Badge variant="outline">Selling</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$499.99</TableCell>
              <TableCell className="text-right">2023-07-12 10:42 AM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Hypernova Headphones
              </TableCell>
              <TableCell>
                <Badge variant="outline">Active</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$129.99</TableCell>
              <TableCell className="text-right">2023-10-18 03:21 PM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AeroGlow Desk Lamp</TableCell>
              <TableCell>
                <Badge variant="outline">Active</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$39.99</TableCell>
              <TableCell className="text-right">2023-11-29 08:15 AM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                TechTonic Energy Drink
              </TableCell>
              <TableCell>
                <Badge variant="secondary">Draft</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$2.99</TableCell>
              <TableCell className="text-right">2023-12-25 11:59 PM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Gamer Gear Pro Controller
              </TableCell>
              <TableCell>
                <Badge variant="outline">Active</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$59.99</TableCell>
              <TableCell className="text-right">2024-01-01 12:00 AM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Luminous VR Headset</TableCell>
              <TableCell>
                <Badge variant="outline">Active</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$199.99</TableCell>
              <TableCell className="text-right">2024-02-14 02:14 PM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Collectionspage;
