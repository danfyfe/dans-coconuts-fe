import { Period } from '../lib/interfaces';

const getCurrentPeriod = (periods: Period[]) => {
    const now = Date.parse(Date());
    const currentPeriod = periods?.find((period: Period) => {
        const parsedStart = Date.parse(period.startTime);
        const parsedEnd = Date.parse(period.endTime);
        return (now > parsedStart) && (now < parsedEnd)
    });
    return currentPeriod ?? false;
};

export default getCurrentPeriod;
