import axios from "axios";


export const aboutchannel = async(req,res) =>
{
  try{
      const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
        params: {
          id: 'UCE_M8A5yxnLfW0KghEeajjw'
        },
        headers: {
          'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
          const response = await axios.request(options);
          console.log(response.data)
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
}


export const Channel = async (req,res) =>
{
    try {
    const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/channel',
        params: {
          id: 'UCiTGKA9W0G0TL8Hm7Uf_u9A',
          next: '4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%3D',
          sort: 'n'
        },
        headers: {
          'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
}

export const videorelated = async (req,res) =>
{
        try {
        const options = {
          method: 'GET',
          url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
          params: {
            id: 'YQHsXMglC9A',
            hl: 'en',
            gl: 'US',
            next: 'CBQSDRILWVFIc1hNZ2xDOUEYACreAQjQr43tubfzi64BCNi24eOapu-n7AEIgejpz9fcuPajAQjwqMe8v7SEuJ0BCI3CwqDWu4nahAEItNrrwNnAzuQ1CK6-ooCH-Jj5JAik8O-ahq3L1sYBCMb965f10YS4UwiNkaXwtL_gzi4I1vOMu5f7r4HeAQjEuYHvqNfimgwIzvHK75mt1Z27AQjw_7n5yaLZ3_UBCJOq5eCOo-XS_QEIocGSnpeajIsXCN2F2tj65L_4zwEI4KbhwtjP98duCI_C_IbhttbzTAi2gO-y3KbjuZgBCNbN7-m31YCKVmoPd2F0Y2gtbmV4dC1mZWVk'
          },
          headers: {
            'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
          }
        };

          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data)
        } catch (error) {
          console.error(error);
        }
    }


export const videocomment = async (req,res) =>
{
    try {
    const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/video/comments',
        params: {
          id: 'YQHsXMglC9A',
          next: 'Eg0SC1lRSHNYTWdsQzlBGAYyJSIRIgtZUUhzWE1nbEM5QTAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D'
        },
        headers: {
          'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
}


export const Trending = async (req,res) =>
{
    try {
    const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
        params: {
          type: 'mu',
          hl: 'en',
          gl: 'US'
        },
        headers: {
          'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
}

export const videoinfo = async (req,res) =>
{
    try {
    const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/video',
        params: {id: 'dQw4w9WgXcQ'},
        headers: {
          'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
}


export const playlist = async (req,res) =>
{
    try {
    const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/playlist',
        params: {
          id: 'PL2UMfhpwklNNI9ALzCFI-cObgnO4nQ2fu',
          next: '4qmFsgJhEiRWTFBMV3dBeXBBY0ZSZ0tBSUlGcUJyOW95LVpZWm5peGFfRmoaFENBRjZCbEJVT2tOSFZRJTNEJTNEmgIiUExXd0F5cEFjRlJnS0FJSUZxQnI5b3ktWllabml4YV9Gag%3D%3D'
        },
        headers: {
          'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
      
     
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
} 

export const searchvideoplaylist = async (req,res) =>
{
    try {
    const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/search',
        params: {
          query: 'rick roll',
          next: 'EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D',
          hl: 'en',
          gl: 'US',
          upload_date: 't',
          type: 'v',
          duration: 's',
          features: 'li;hd',
          sort: 'v'
        },
        headers: {
          'X-RapidAPI-Key': '93e0855041mshfb8edac351860bep195e9djsn00b493579d95',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
      
      
          const response = await axios.request(options);
          console.log(response.data);
          return res.send(response.data);
      } catch (error) {
        console.error(error);
}
}