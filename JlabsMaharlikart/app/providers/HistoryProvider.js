import {createContext, useState} from 'react';

export const HistoryContext = createContext();

// Provider for users array
export const HistoryProvider = props => {
  const [history, setHistory] = useState([]);

  return (
    <HistoryContext.Provider value={[history, setHistory]}>
      {props.children}
    </HistoryContext.Provider>
  );
};

const historyExport = {HistoryContext, HistoryProvider};
export default historyExport;
