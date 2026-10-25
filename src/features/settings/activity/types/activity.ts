export type Activity = {
  id: string;
  causerId: string;
  causerType: string;
  logName: string;
  subjectId: string;
  subjectType: string;
  action: string;
  description: string;
  properties: {
    new: any;
    old: any;
  };
  createdAt: Date;
  createdBy: string;
  createdByKh: string;
};
