"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DetailsDialog from "./details_dialog";

export type ProjectCardProps = {
  Title: string;
  Description: string;
  Image: string;
  Author: string;
  Staking: string;
  Proposals: string;
  Process: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const router = useRouter();
  const [showDetail,setShowDetail] = useState(false)
    const handleDetailsClick = () => {
      setShowDetail(true);
    };

    const handleCloseDialog = () => {
      setShowDetail(false);
    };
  return (
    <div className="flex flex-row border-primary border-b-4 p-4 rounded-3xl justify-between space-x-10">
      <Card className="rounded-3xl basis-3/4">
        <CardHeader>
          <CardTitle>{props.Title}</CardTitle>
          <CardDescription>{props.Author}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row space-x-5">
          <Image
            src={props.Image}
            alt={props.Title}
            width={"200"}
            height={"200"}
            className="rounded-3xl"
          ></Image>
          <p className="tracking-wider leading-loose text-justify">
            {props.Description}
          </p>
        </CardContent>
      </Card>
      <Card className="rounded-3xl basis-1/4">
        <CardHeader>
          <CardTitle>{"About"}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-5">
          <div className="flex justify-between">
            <p className="text-2xl text-primary">{"Staking:"}</p>
            <p className="text-2xl">{props.Staking}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-2xl text-primary">{"Proposals:"}</p>
            <p className="text-2xl">{props.Proposals}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-2xl text-primary">{"Process:"}</p>
            <p className="text-2xl">{props.Process} Week</p>
          </div>
        </CardContent>
        <CardFooter className="pt-5">
          <Button className="flex-1" onClick={handleDetailsClick}>
            Bit
          </Button>
          {showDetail && (
            <DetailsDialog
              project={props}
              open={showDetail}
              handleClose={handleCloseDialog}
            />
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
