export const clusters = Array(4)
    .fill(1)
    .map((_, index) => {
        return {
            id: `cluster-${index}`,
            name: `my cluster ${index}`,
            status: Math.random() > 0.5 ? "active" : "inactive",
            databases: Array(3)
                .fill(1)
                .map((_, index) => {
                    return {
                        id: `database-${index}`,
                        name: `database_${index}`,
                        tables: Array(4)
                            .fill(1)
                            .map((_, index) => {
                                return {
                                    id: `table-${index}`,
                                    name: `mz-table-${index}`,
                                    columns: Array(4)
                                        .fill(1)
                                        .map((_, index) => {
                                            return {
                                                id: `column-${index}`,
                                                name: `long column name ${index}`,
                                            };
                                        }),
                                };
                            }),
                    };
                }),
        };
    });

export const workspaceGroups = Array(4)
    .fill(1)
    .map((_, index) => {
        return {
            id: `workspace-${index}`,
            name: `Workspace Group ${index}`,
            workspaces: Array(3)
                .fill(1)
                .map((_, index) => {
                    return {
                        id: `workspace-${index}`,
                        name: `Workspace ${index}`,
                        status: Math.random() > 0.5 ? "active" : "inactive",
                    };
                }),
            databases: Array(3)
                .fill(1)
                .map((_, index) => {
                    return {
                        id: `database-${index}`,
                        name: `database_${index}`,
                        status: Math.random() > 0.5 ? "active" : "inactive",
                        tables: Array(4)
                            .fill(1)
                            .map((_, index) => {
                                return {
                                    id: `table-${index}`,
                                    name: `d7d4c050-3ced-49e1-8cff-a7e8eb95e691-mz-table-${index}`,
                                    columns: Array(4)
                                        .fill(1)
                                        .map((_, index) => {
                                            return {
                                                id: `column-${index}`,
                                                name: `really really really really REALLY long column name ${index}`,
                                            };
                                        }),
                                };
                            }),
                    };
                }),
        };
    });
