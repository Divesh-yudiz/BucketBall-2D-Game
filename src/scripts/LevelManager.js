class LevelManager {
    constructor(oScene) {
        this.oScene = oScene;
    }

    levels = {
        1: {
            name: "Level 1", level: 0, bucketCoordinates: {
                leftBoundary: { x: 1637, y: 604, angle: -43 },
                rightBoundary: { x: 1744, y: 534, angle: -21 },
                bottomBoundary: { x: 1734, y: 620, angle: -127 }
            }, score: 0, obstacleCount: 0, winObjStat: { x: 1690, y: 567, angle: -33 }
        },
        2: {
            name: "Level 2", level: 1, bucketCoordinates: {
                leftBoundary: { x: 1584, y: 645, angle: -11 },
                rightBoundary: { x: 1710, y: 647, angle: 12 },
                bottomBoundary: { x: 1644, y: 695, angle: -91 }
            }, score: 0, winObjStat: { x: 1646, y: 639, angle: 0 }
        },
        3: {
            name: "Level 3", level: 2, bucketCoordinates: {
                leftBoundary: { x: 1370, y: 825, angle: -11 },
                rightBoundary: { x: 1496, y: 827, angle: 12 },
                bottomBoundary: { x: 1430, y: 880, angle: -91 },
            }, score: 0, obstacleCount: 1, obstacleCoordinates: { 1: { x: 1114, y: 805, angle: 0, scaleX: 1.2, scaleY: 1.35 } }, winObjStat: { x: 1432, y: 821, angle: 0 }
        },
        4: {
            name: "Level 4", level: 3, bucketCoordinates: {
                leftBoundary: { x: 1596, y: 684, angle: -44 },
                rightBoundary: { x: 1702, y: 617, angle: -20 },
                bottomBoundary: { x: 1694, y: 690, angle: 57 }
            }, score: 0, winObjStat: { x: 1647, y: 645, angle: -33 }, passThrough: { x: 1027, y: 408, scaleX: 1.5, scaleY: 1.15, angle: 0 }
        },
        5: {
            name: "Level 5", level: 4, bucketCoordinates: {
                leftBoundary: { x: 1370, y: 825, angle: -11 },
                rightBoundary: { x: 1496, y: 827, angle: 12 },
                bottomBoundary: { x: 1430, y: 875, angle: -91 },
            }, score: 0, obstacleCount: 1, obstacleCoordinates: { 1: { x: 1736, y: 533, angle: 0, scaleX: 1.2, scaleY: 1.61 } }, winObjStat: { x: 1433, y: 819, angle: 0 }
        },
        6: {
            name: "Level 6", level: 5, bucketCoordinates: {
                leftBoundary: { x: 1370, y: 825, angle: -11 },
                rightBoundary: { x: 1496, y: 827, angle: 12 },
                bottomBoundary: { x: 1430, y: 885, angle: -91 },
            }, score: 0, obstacleCount: 1, obstacleCoordinates: { 1: { x: 1795, y: 545, angle: 0, scaleX: 1.2, scaleY: 1.6 }, }, passThrough: { x: 1577, y: 353, scaleX: 1.5, scaleY: 1.15, angle: 0 }, winObjStat: { x: 1433, y: 819, angle: 0 }
        },
        7: {
            name: "Level 7", level: 6, bucketCoordinates: {
                leftBoundary: { x: 1369, y: 826, angle: -11 },
                rightBoundary: { x: 1495, y: 827, angle: 11 },
                bottomBoundary: { x: 1433, y: 885, angle: 90 },
            }, score: 0, obstacleCount: 2, obstacleCoordinates: { 1: { x: 1201, y: 789, angle: 25, scaleX: 1.2, scaleY: 1.61 }, 2: { x: 1769, y: 551, angle: 0, scaleX: 1.1, scaleY: 1.05 } }, passThrough: { x: 985, y: 356, scaleX: 1.5, scaleY: 1.15, angle: 0 }, winObjStat: { x: 1433, y: 819, angle: 0 }
        },

        8: {
            name: "Level 8", level: 7, bucketCoordinates: {
                leftBoundary: { x: 1369, y: 826, angle: -11 },
                rightBoundary: { x: 1495, y: 827, angle: 11 },
                bottomBoundary: { x: 1433, y: 885, angle: 90 },
            }, score: 0, obstacleCount: 3, obstacleCoordinates: { 1: { x: 878, y: 330, angle: 0, scaleX: 1.2, scaleY: 1.65 }, 2: { x: 1769, y: 551, angle: 25, scaleX: 1.2, scaleY: 1.6 }, 3: { x: 904, y: 892, angle: 90, scaleX: 1.2, scaleY: 1.04 } }, winObjStat: { x: 1433, y: 819, angle: 0 }
        },

        9: {
            name: "Level 9", level: 8, bucketCoordinates: {
                leftBoundary: { x: 649, y: 859, angle: -2 },
                rightBoundary: { x: 773, y: 881, angle: 21 },
                bottomBoundary: { x: 697, y: 932, angle: 97 },
            }, score: 0, obstacleCount: 1, obstacleCoordinates: { 1: { x: 1428, y: 554, angle: 19, scaleX: 1.2, scaleY: 1.04 } }, passThrough: { x: 1024, y: 406, scaleX: 1.5, scaleY: 1.15, angle: 0 }, winObjStat: { x: 711, y: 865, angle: 10 }
        },

        10: {
            name: "Level 10", level: 9, bucketCoordinates: {
                leftBoundary: { x: 1164, y: 866, angle: 6 },
                rightBoundary: { x: 1282, y: 909, angle: 30 },
                bottomBoundary: { x: 1195, y: 945, angle: 109 },
            }, score: 0, obstacleCount: 1, obstacleCoordinates: { 1: { x: 1713, y: 654, angle: 0, scaleX: 1.2, scaleY: 1.65 } }, passThrough: { x: 860, y: 366, scaleX: 1.5, scaleY: 0.7, angle: 0 }, winObjStat: { x: 1223, y: 885, angle: 20 }
        },

        11: {
            name: "Level 11", level: 10, bucketCoordinates: {
                leftBoundary: { x: 1459, y: 953, angle: -11 },
                rightBoundary: { x: 1586, y: 959, angle: 11 },
                bottomBoundary: { x: 1525, y: 1015, angle: 90 },
            }, score: 0, obstacleCount: 3, obstacleCoordinates: { 1: { x: 944, y: 660, angle: 0, scaleX: 1.2, scaleY: 0.85 }, 2: { x: 1219, y: 928, angle: 90, scaleX: 1.2, scaleY: 1 }, 3: { x: 1713, y: 654, angle: -9, scaleX: 1.2, scaleY: 1.65 } }, passThrough: { x: 1102, y: 707, scaleX: 1.5, scaleY: 0.7, angle: 0 }, winObjStat: { x: 1520, y: 950, angle: 0 }
        },

        12: {
            name: "Level 12", level: 11, bucketCoordinates: {
                leftBoundary: { x: 1039, y: 831, angle: 22 },
                rightBoundary: { x: 1141, y: 904, angle: 45 },
                bottomBoundary: { x: 1041, y: 913, angle: 126 },
            }, score: 0, obstacleCount: 1, obstacleCoordinates: { 1: { x: 1651, y: 723, angle: 24, scaleX: 1.2, scaleY: 1.1 } }, winObjStat: { x: 1090, y: 861, angle: 36 }
        },

        13: {
            name: "Level 13", level: 12, bucketCoordinates: {
                leftBoundary: { x: 1078, y: 876, angle: -11 },
                rightBoundary: { x: 1204, y: 876, angle: 11 },
                bottomBoundary: { x: 1142, y: 936, angle: 87 },
            }, score: 0, obstacleCount: 2, obstacleCoordinates: { 1: { x: 906, y: 740, angle: 0, scaleX: 1.12, scaleY: 1.05 }, 2: { x: 1662, y: 652, angle: 33.5, scaleX: 1.2, scaleY: 1.65 } }, passThrough: { x: 1139, y: 556, scaleX: 1.5, scaleY: 1.15, angle: 90 }, winObjStat: { x: 1141, y: 871, angle: 0 }
        },
        14: {
            name: "Level 14", level: 13, bucketCoordinates: {
                leftBoundary: { x: 1121, y: 886, angle: -11 },
                rightBoundary: { x: 1247, y: 886, angle: 11 },
                bottomBoundary: { x: 1185, y: 946, angle: 87 },
            }, score: 0, obstacleCount: 2, obstacleCoordinates: { 1: { x: 1003, y: 603, angle: 34, scaleX: 1.2, scaleY: 1.05 }, 2: { x: 1650, y: 725, angle: 34, scaleX: 1.2, scaleY: 1.05 } }, winObjStat: { x: 1184, y: 881, angle: 0 }
        },
        15: {
            name: "Level 15", level: 14, bucketCoordinates: {
                leftBoundary: { x: 1078, y: 877, angle: -11 },
                rightBoundary: { x: 1204, y: 877, angle: 11 },
                bottomBoundary: { x: 1142, y: 937, angle: 87 },
            }, score: 0, obstacleCount: 3, obstacleCoordinates: { 1: { x: 1666, y: 648, angle: 33.5, scaleX: 1.2, scaleY: 1.65 }, 2: { x: 1111, y: 516, angle: 90, scaleX: 1, scaleY: 0.75 }, 3: { x: 906, y: 739, angle: 0, scaleX: 1.2, scaleY: 1.05 }, }, winObjStat: { x: 1140, y: 871, angle: 0 }
        },
        16: {
            name: "Level 16", level: 15, bucketCoordinates: {
                leftBoundary: { x: 1212, y: 634, angle: -11 },
                rightBoundary: { x: 1338, y: 634, angle: 11 },
                bottomBoundary: { x: 1276, y: 694, angle: 87 },
            }, score: 0, obstacleCount: 2,passThrough: { x: 1017, y: 748, scaleX: 1.5, scaleY: 0.7, angle: 0 }, obstacleCoordinates: { 1: { x: 1713, y: 641, angle: 25, scaleX: 1.2, scaleY: 1.6 }, 2: { x: 1304, y: 951, angle: 90, scaleX: 1.2, scaleY: 1.05 }, }, winObjStat: { x: 1274, y: 628, angle: 0 }
        },
        17: {
            name: "Level 17", level: 16, bucketCoordinates: {
                leftBoundary: { x: 1012, y: 584, angle: 18 },
                rightBoundary: { x: 1120, y: 650, angle: 41 },
                bottomBoundary: { x: 1025, y: 670, angle: 120 },
            }, score: 0, obstacleCount: 3, obstacleCoordinates: { 1: { x: 1685, y: 457, angle: -22, scaleX: 1.2, scaleY: 1.1 }, 2: { x: 1563, y: 814, angle: 52, scaleX: 1.2, scaleY: 1.1 }, 3: { x: 1144, y: 932, angle: 90, scaleX: 1.2, scaleY: 1.37 }, }, passThrough: { x: 1364, y: 687, scaleX: 1.5, scaleY: 0.7, angle: 108 }, winObjStat: { x: 1066, y: 614, angle: 30 }
        },
        18: {
            name: "Level 18", level: 17, bucketCoordinates: {
                leftBoundary: { x: 1079, y: 877, angle: -11 },
                rightBoundary: { x: 1204, y: 876, angle: 11 },
                bottomBoundary: { x: 1139, y: 937, angle: 87 },
            }, score: 0, obstacleCount: 4, obstacleCoordinates: { 1: { x: 105, y: 555, angle: 0, scaleX: 1.2, scaleY: 1.05 }, 2: { x: 422, y: 704, angle: 0, scaleX: 1, scaleY: 0.8 }, 3: { x: 923, y: 740, angle: 0, scaleX: 1.2, scaleY: 1.05 }, 4: { x: 1665, y: 655, angle: 33.5, scaleX: 1.2, scaleY:1.65 }, }, winObjStat: { x: 1137, y: 873, angle: 0 }
        },
        19: {
            name: "Level 19", level: 18, bucketCoordinates: {
                leftBoundary: { x: 932, y: 756, angle: -11 },
                rightBoundary: { x: 1057, y: 755, angle: 11 },
                bottomBoundary: { x: 992, y: 816, angle: 86 },
            }, score: 0, obstacleCount: 2, obstacleCoordinates: { 1: { x: 1332, y: 372, angle: -51, scaleX: 1.2, scaleY: 1.05 }, 2: { x: 1360, y: 848, angle: 59, scaleX: 1.2, scaleY: 1.65 } }, passThrough: { x: 1271, y: 764, scaleX: 1.5, scaleY: 1.15, angle: 59 }, winObjStat: { x: 994, y: 754, angle: 0 }
        },
        20: {
            name: "Level 20", level: 19, bucketCoordinates: {
                leftBoundary: { x: 1119, y: 946, angle: -11 },
                rightBoundary: { x: 1244, y: 946, angle: 11 },
                bottomBoundary: { x: 1179, y: 1006, angle: 86 },
            }, score: 0, obstacleCount: 3, obstacleCoordinates: { 1: { x: 1231, y: 265, angle: -20, scaleX: 1.2, scaleY: 1.05 }, 2: { x: 1671, y: 805, angle: 34, scaleX: 1.2, scaleY: 1.65 }, 3: { x: 672, y: 891, angle: -49, scaleX: 1.2, scaleY: 1.05 }, }, passThrough: { x: 1630, y: 659, scaleX: 1.5, scaleY: 1.15, angle: 34 }, winObjStat: { x: 1180, y: 940, angle: 0 }
        },
        21: {
            name: "Level 21", level: 20, bucketCoordinates: {
                leftBoundary: { x: 1119, y: 946, angle: -11 },
                rightBoundary: { x: 1244, y: 945, angle: 11 },
                bottomBoundary: { x: 1179, y: 1006, angle: 86 },
            }, score: 0, obstacleCount: 3, obstacleCoordinates: { 1: { x: 1269, y: 354, angle: 34.5, scaleX: 1.2, scaleY: 1.05 }, 2: { x: 1569, y: 730, angle: 34, scaleX: 1.2, scaleY: 1.65 }, 3: { x: 974, y: 841, angle: 34, scaleX: 1.2, scaleY: 1.05 }, }, winObjStat: { x: 1181, y: 941, angle: 0 }
        },
        22: {
            name: "Level 22", level: 21, bucketCoordinates: {
                leftBoundary: { x: 1371, y: 828, angle: -11 },
                rightBoundary: { x: 1496, y: 827, angle: 11 },
                bottomBoundary: { x: 1431, y: 888, angle: 86 },
            }, score: 0, obstacleCount: 3, obstacleCoordinates: { 1: { x: 879, y: 335, angle: 0, scaleX: 1.2, scaleY: 1.55 }, 2: { x: 1782, y: 558, angle: 25, scaleX: 1.2, scaleY: 1.65 }, 3: { x: 900, y: 896, angle: 90, scaleX: 1.2, scaleY: 1.05 }, }, passThrough: { x: 1668, y: 508, scaleX: 1.5, scaleY: 1.15, angle: 25 }, winObjStat: { x: 1432, y: 825, angle: 0 }
        },
        23: {
            name: "Level 23", level: 22, bucketCoordinates: {
                leftBoundary: { x: 1371, y: 826, angle: -11 },
                rightBoundary: { x: 1497, y: 827, angle: 11 },
                bottomBoundary: { x: 1433, y: 887, angle: 86 },
            }, score: 0, obstacleCount: 3, obstacleCoordinates: { 1: { x: 1782, y: 560, angle: 25, scaleX: 1.2, scaleY: 1.65 }, 2: { x: 956, y: 286, angle: 90, scaleX: 1.2, scaleY: 3 }, 3: { x: 877, y: 773, angle: 0, scaleX: 1.2, scaleY: 1.9 }, }, winObjStat: { x: 1432, y: 825, angle: 0 }
        },
        24: {
            name: "Level 24", level: 23, bucketCoordinates: {
                leftBoundary: { x: 1372, y: 826, angle: -11 },
                rightBoundary: { x: 1497, y: 827, angle: 11 },
                bottomBoundary: { x: 1433, y: 887, angle: 86 },
            }, score: 0, obstacleCount: 4, obstacleCoordinates: { 1: { x: 901, y: 287, angle: 90, scaleX: 1.2, scaleY: 1 }, 2: { x: 1782, y: 560, angle: 25, scaleX: 1.2, scaleY: 1.65 }, 3: { x: 877, y: 841, angle: 0, scaleX: 1.2, scaleY: 1.9 }, 4: { x: 1012, y: 723, angle: 136, scaleX: 1.2, scaleY: 1 } },passThrough: { x: 1665, y: 511, scaleX: 1.5, scaleY: 1.15, angle: 25 }, winObjStat: { x: 1432, y: 825, angle: 0 }
        },
        25: {
            name: "Level 25", level: 24, bucketCoordinates: {
                leftBoundary: { x: 1154, y: 855, angle: -11 },
                rightBoundary: { x: 1280, y: 856, angle: 11 },
                bottomBoundary: { x: 1216, y: 916, angle: 86 },
            }, score: 0, obstacleCount: 5, obstacleCoordinates: { 1: { x: 735, y: 175, angle: 0, scaleX: 1.2, scaleY: 1.65 }, 2: { x: 932, y: 410, angle: 90, scaleX: 1.2, scaleY: 1 }, 3: { x: 941, y: 657, angle: 90, scaleX: 1.5, scaleY: 1 }, 4: { x: 760, y: 877, angle: 0, scaleX: 1.2, scaleY:1.9 }, 5: { x: 1657, y: 624, angle: 24.5, scaleX: 1.2, scaleY: 1.65 } }, winObjStat: { x: 1216, y: 844, angle: 0 }
        },
    }
}

// 