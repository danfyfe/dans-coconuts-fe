import { IPeriod } from "@/interfaces/weather";

const getCurrentPeriod = (periods: IPeriod[]) => {
    const now = Date.parse(Date());
    const currentPeriod = periods?.find((period: IPeriod) => {
        const parsedStart = Date.parse(period.startTime);
        const parsedEnd = Date.parse(period.endTime);
        return (now > parsedStart) && (now < parsedEnd)
    });
    return currentPeriod ?? false;
};

export default getCurrentPeriod;
