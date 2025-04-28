import React from "react";
import { Button, Card } from "react-bootstrap";
import { styled } from "styled-components";

interface Props {
  name: string;
}

function CardMenu({ name }: Props) {
  return (
    <StyledCard className="shadow">
      <CardBody>
        <DFlexColumn>
          <StyledColumn>
            <div style={{ width: "3rem", height: "3rem" }}>
              <img
                src="/static/logo/logopaper.png"
                alt=""
                height={"100%"}
                width={"100%"}
              />
            </div>
            <Text>{name}</Text>
          </StyledColumn>
          <StyledButton>
            Masuk Ke Website
          </StyledButton>
        </DFlexColumn>
      </CardBody>
    </StyledCard>
  );
}

export default CardMenu;

const StyledCard = styled(Card)`
  border-radius: 0.5rem;
  background-color: white;
  height: 100%;
  min-width: 16rem;
  border: none;
`;

const CardBody = styled(Card.Body)`
  padding: 1.33333rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const DFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.56666rem;
`;

const StyledColumn = styled(DFlexColumn)`
  gap: 0.8rem;
`;

const StyledButton = styled.button`
  background-color: #57af83;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: white;
`;
