export const AUTH_TOKENS = {
  MAPBOX_TOKEN: process.env.REACT_APP_MapboxAccessToken, // eslint-disable-line
  DROPBOX_CLIENT_ID: process.env.DropboxClientId, // eslint-disable-line
  EXPORT_MAPBOX_TOKEN: process.env.MapboxExportToken, // eslint-disable-line
  CARTO_CLIENT_ID: process.env.CartoClientId, // eslint-disable-line
}

export const MAP_STYLE_OPTIONS = [
  {
    id: "dark",
    label: "Dark",
    app_theme: "dark",
    // url: "mapbox://styles/uberdata/cjoqbbf6l9k302sl96tyvka09",
    // style_id: "cjoqbbf6l9k302sl96tyvka09",
    url: "mapbox://styles/serpapi/clvksicgz01fa01oc7o6u0380",
    style_id: "anwarhuda97/cln151h0f02z801qu4tw7544e",
  },
  {
    id: "light",
    label: "Light",
    app_theme: "light",
    // url: "mapbox://styles/uberdata/cjoqb9j339k1f2sl9t5ic5bn4",
    // style_id: "cjoqb9j339k1f2sl9t5ic5bn4",
    url: "mapbox://styles/serpapi/clvm5901w01i001oc4nkl5idc",
    style_id: "anwarhuda97/clnlk36fw003r01qqg6f8fcv1",
  },
]
