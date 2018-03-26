export class BaseClass {
    message: string;
    description: string;
}

export class GcrmState extends BaseClass {
    GcrmStateId: number;
}

export class Phase extends BaseClass {
    PhaseId: number;
}

export class Priority extends BaseClass {
    PriorityId: number;
}

export class ProductLine extends BaseClass {
    ProductLineId: number;
}

export class ProjectState extends BaseClass {
    ProjectStateId: number;
}
