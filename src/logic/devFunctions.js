import { DataStore } from 'aws-amplify/datastore';
import { Hub } from 'aws-amplify/utils';

// This function clears then resyncs the local storage with the remote storage
export async function RefreshLocalStorage(runOnCompletion) {
  console.log("DataStore is refreshed");
  await DataStore.clear();
  await DataStore.start();
  await StartListening(runOnCompletion);
}

// A listener that will run the runOnCompletion function when the DataStore is fully synced
// then it will stop listening
async function StartListening({ runOnCompletion = () => {/* Do Nothing */} }) {
  console.log("DataStore is started");
  const listener = Hub.listen('datastore', async hubData => {
    const { event, data } = hubData.payload;
    if (event === 'ready') {
      console.log("DataStore is ready");
      runOnCompletion();
      listener(); // Stops the listener
    }
  })
}
