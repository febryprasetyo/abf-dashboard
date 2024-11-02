import { useEffect, useState } from 'react';
import Ilustrator from '../assets/ilustrasi.png';
import { useParams } from 'react-router-dom';
import mqtt from 'mqtt';

const initParam = {
  time: '',
  '#Cold storage fan overload': 0,
  '#Cold storage high T alarm': 0,
  '#Cold storage low T alarm': 0,
  '#Compressor overload': 0,
  '#Door open alarm': 0,
  '#Emergency stop protection': 0,
  '#Feedback signal B protection': 0,
  '#High T timeout alarm': 0,
  '#High and low voltage switch': 0,
  '#Integrated power protection': 0,
  '#Low T timeout alarm': 0,
  '#Module protection': 0,
  '#Oil pressure differential': 0,
  '#Overload of condensing fan': 0,
  'Analog detection cycle': 0,
  'Clear all occurrences': 0,
  'Clear production records': 0,
  "Clear today's frequency": 0,
  'Cold storage T 1 correction': 0,
  'Cold storage T 2 correction': 0,
  'Cold storage high T alarm': 0,
  'Cold storage low T alarm': 0,
  'Cold storage temperature 1': 0,
  'Cold storage temperature 2': 0,
  'Compressor status': 0,
  'Condensation stop delay': 0,
  'Cooling start-up temperature': 0,
  'Cooling stop temperature': 0,
  'Defrosting heating time': 0,
  'Defrosting temperature': 0,
  'End temperature of defrosting': 0,
  'Equipment situation': 0,
  'Fan cycle on time': 0,
  'Fan cycle shutdown time': 0,
  'Fault detection delay': 0,
  'Frost and water dripping time': 0,
  'Frost interval time': 0,
  'Frost temperature correction': 0,
  'Hydraulic valve': 0,
  'Manual defrosting': 0,
  'Number of door openings today': 0,
  Press: 0,
  'Record production volume': 0,
  'Shutdown protection time': 0,
  'Starting system': 0,
  'Stop System': 0,
  "Today's output": 0,
  'Total number of door openings': 0,
  'Unit power on delay': 0,
  'Warehouse T timeout alarm': 0,
  'alarm silence': 0,
  'average temperature': 0,
  'condensing fan': 0,
  'door open alarm delay': 0,
  drip: 0,
  fan: 0,
  'fan Delay the start time ': 0,
  'fan Delayed shutdown time': 0,
  'fault reset': 0,
  production: 0,
  'shutdown protection time': 0,
  'total output': 0,
};

export default function DashboardSpeedometer() {
  const { id } = useParams();
  const [dataMonitoring, setDataMonitoring] = useState(initParam);

  useEffect(() => {
    const client = mqtt.connect('ws://103.84.206.53:9001');
    const topic = id as string;
    client.subscribe(topic);
    console.log(id);

    client.on('message', (_topic, message) => {
      // Handle the incoming message
      const jsonString = JSON.parse(message.toString());
      const datamqtt = jsonString.data;
      if (datamqtt != null) {
        setDataMonitoring(jsonString.data);
      } else {
        console.log('NULL');
      }

      // setDataMonitoring(jsonString.data);
      console.log(jsonString.time);
    });
    return () => {
      client.end(); // Close the MQTT connection
      //   setDataIsLoad(false);
    };
  });

  return (
    <div className='bg-blue-800 min-h-screen pb-4'>
      <div className='bg-blue-800 py-10'>
        <div className='mx-auto flex flex-wrap justify-center sm:mb-10'>
          <div className='max-w-xl w-4/12 bg-white mr-8 '>
            {/* Cooling fan */}
            <div>
              <div className=' flex min-h-full items-end justify-center p-1 text-center '>
                <div
                  className={`h-[30px] w-[30px] rounded-full mr-2 ${
                    dataMonitoring.fan !== 1
                      ? 'text-blue-gray-300 bg-blue-gray-500'
                      : 'bg-green-500'
                  }   `}></div>
                <div
                  className={`text-center p-1 ${
                    dataMonitoring.fan !== 1
                      ? 'text-blue-gray-800 bg-blue-gray-300'
                      : 'bg-green-500'
                  }  `}>
                  1#Cooling Fan
                </div>
              </div>
            </div>

            {/* liquid valve */}
            <div className=' relative overflow-visible '>
              <div className='absolute lg:top-36 lg:end-24 sm:top-24 sm:end-10 '>
                <div
                  className={`text-center p-1 ${
                    dataMonitoring['Hydraulic valve'] !== 1
                      ? 'text-blue-gray-800 bg-blue-gray-300'
                      : 'bg-green-500'
                  }  `}>
                  Liquid Valve
                </div>
                <div
                  className={`h-[30px] w-[30px] absolute end-0  rounded-full mt-2 ${
                    dataMonitoring['Hydraulic valve'] !== 1
                      ? 'text-blue-gray-800 bg-blue-gray-300'
                      : 'bg-green-500'
                  } `}></div>
              </div>
            </div>
            {/* liquid valve */}
            <div>
              <div className=' flex min-h-full items-end justify-center p-1 text-center sm:-mt-14 lg:mt-0 '>
                <img src={Ilustrator} alt='' className='object-contain h-96' />
              </div>
            </div>
            <div>
              <div className='flex min-h-full items-end justify-end p-1 text-center sm:-mt-10 lg:mt-0 '>
                <div className='flex'>
                  <div
                    className={`h-[30px] w-[30px] rounded-full mr-2 ${
                      dataMonitoring.fan !== 1
                        ? 'text-blue-gray-800 bg-blue-gray-300'
                        : 'bg-green-500'
                    }   `}></div>
                  <div
                    className={`text-center w-24 p-1 ${
                      dataMonitoring.fan !== 1
                        ? 'text-blue-gray-800 bg-blue-gray-300'
                        : 'bg-green-500'
                    }  `}>
                    Fan
                  </div>
                </div>
              </div>
              <div className='flex min-h-full items-end justify-end p-1 text-center '>
                <div className='flex'>
                  <div
                    className={`h-[30px] w-[30px] rounded-full mr-2 ${
                      dataMonitoring['Manual defrosting'] !== 1
                        ? 'text-blue-gray-800 bg-blue-gray-300'
                        : 'bg-green-500'
                    }   `}></div>
                  <div
                    className={`text-center w-24 p-1 ${
                      dataMonitoring['Manual defrosting'] !== 1
                        ? 'text-blue-gray-800 bg-blue-gray-300'
                        : 'bg-green-500'
                    }  `}>
                    Defrost
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RSIDE */}
          <div className='max-w-xl flex-none w-8/12'>
            {/* TEMPERATURE */}
            <div className=''>
              <div className='grid grid-cols-4 gap-2 relative  items-center justify-between'>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Temp 1</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['Cold storage temperature 1'].toFixed(2)}{' '}
                    {`\u00B0C`}
                  </h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Average Temp</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['average temperature'].toFixed(2)}{' '}
                    {`\u00B0C`}
                  </h2>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='grid grid-cols-4 gap-2 relative  items-center justify-between'>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Temp 2</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['Cold storage temperature 2'].toFixed(2)}{' '}
                    {`\u00B0C`}
                  </h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Defrost Temp </h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['Defrosting temperature'].toFixed(2)}{' '}
                    {`\u00B0C`}
                  </h2>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='grid grid-cols-4 gap-2 relative  items-center justify-between'>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Status</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Normal</h2>
                </div>
              </div>
            </div>

            {/* DOOR */}
            <div className='mt-6'>
              <div className='flex relative  items-center justify-between'>
                <div className='h-10 w-3/12 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Door</h2>
                </div>
                <div className='h-10 w-1/3 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Door Open</h2>
                </div>
                <div className='h-10 w-1/3 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Door Close</h2>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='flex relative  items-center justify-between'>
                <div className='h-10 w-3/12 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Today</h2>
                </div>
                <div className='h-10 w-1/3 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['Number of door openings today']} times
                  </h2>
                </div>
                <div className='h-10 w-1/3 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['Number of door openings today']} times
                  </h2>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='flex relative  items-center justify-between'>
                <div className='h-10 w-3/12 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Total</h2>
                </div>
                <div className='h-10 w-1/3 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['Total number of door openings']} times
                  </h2>
                </div>
                <div className='h-10 w-1/3 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['Total number of door openings']} times
                  </h2>
                </div>
              </div>
            </div>

            {/* CLEAR */}
            <div className='mt-6'>
              <div
                className='grid grid-cols-2
               gap-2 relative  items-center justify-between'>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Clear Todays Time</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Clear Total Times</h2>
                </div>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className='mt-2'>
              <div className='grid grid-cols-4 gap-2 relative  items-center justify-between'>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Product</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Product Quantity</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Today </h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Total</h2>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='grid grid-cols-4 gap-2 relative  items-center justify-between'>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Quality</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>0</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring["Today's output"]}
                  </h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>
                    {dataMonitoring['total output']}
                  </h2>
                </div>
              </div>
            </div>

            {/* CLEAR */}
            <div className='mt-2'>
              <div
                className='grid grid-cols-2
               gap-2 relative  items-center justify-between'>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Record Quantity</h2>
                </div>
                <div className='h-10 bg-white items-center flex justify-center'>
                  <h2 className=' text-center '>Clear ALL Quantity</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
