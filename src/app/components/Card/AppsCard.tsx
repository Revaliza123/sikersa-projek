import ArrowRightIcon from "@app/components/Icons/ArrowRightIcon";
import {
  AppCardItem,
  AppCardImage,
  AppCardTitle,
  AppCardLink,
} from "@app/styled/app-landing.styled";
import React from "react";
import { Card } from "react-bootstrap";

export default function AppCard({ workspace, name, image, link }: IAppCard) {
  const colorTheme = workspace?.application?.colorTheme || "sidesa";
  const bgCardEdge = `/static/img/landing-page/${colorTheme}/bg-rectangle-card-edge.svg`;

  return (
    <>
      <AppCardItem>
        <Card.Body>
          <AppCardImage className="">{image}</AppCardImage>
          {/* <img className="bg-edge" src={bgCardEdge} /> */}
          <div className="body">
            <AppCardTitle>{name}</AppCardTitle>
            {/* <AppCardDesc>{description}</AppCardDesc> */}
            <AppCardLink
              href={
                workspace?.prefixPath
                  ? `/${workspace?.prefixPath}${link}`
                  : link
              }
            >
              Masuk ke Website <ArrowRightIcon />
            </AppCardLink>
          </div>
        </Card.Body>
      </AppCardItem>
    </>
  );
}

export interface IAppCard {
  workspace?: any;
  name: string;
  description: string;
  image: any;
  link: string;
}
