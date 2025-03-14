export type bowler = {
  bowlerID: number;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerLastName: string;
  teamID: number;
  bowlerAddress: number;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  team: {
    teamID: number;
    teamName: string;
    captainID: number;
  };
};
