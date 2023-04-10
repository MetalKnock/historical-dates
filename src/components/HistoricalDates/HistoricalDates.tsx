import { ContentContainer } from '../ContentContainer';
import DatesContextProvider from '../../context/DatesContext';

export default function HistoricalDates() {
  return (
    <DatesContextProvider>
      <ContentContainer />
    </DatesContextProvider>
  );
}
