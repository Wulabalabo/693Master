"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { ProjectCardProps } from "./project_card";
import { Input } from "./ui/input";

const DetailsDialog = ({ project,open, handleClose }: { project:ProjectCardProps; open: boolean; handleClose:()=>void }) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="m-5">{project.Title}</DialogTitle>
            <div>
              <Card>
                <CardContent>
                  <div className="grid grid-cols-2 my-5 space-x-10">
                    <Image
                      src={project.Image}
                      alt={project.Title}
                      width={"200"}
                      height={"200"}
                      className="rounded-3xl"
                    ></Image>
                    <div className="grid grid-rows-4 space-y-5">
                      <p>Authors: {project.Author}</p>
                      <p>Current Price: 100</p>
                      <p>Start At: 2024.05.18</p>
                      <p>End At: 2024.08.18</p>
                    </div>
                  </div>
                  <div className="h-50 w-100 overflow-hidden">
                    {project.Description}
                  </div>
                </CardContent>
              </Card>
            </div>
          </DialogHeader>
          <DialogClose asChild>
            <div className="grid grid-rows-2 space-y-2">
              <div className="flex justify-between space-x-5">
                <Input className="w-7/12" type="number" />
                <Button className="flex-1" type="button">
                  Bit
                </Button>
              </div>
              <Button type="button" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DetailsDialog;
