# Watch IPTV 
#### Using node-red and uibuilder
![Alt text](./resources/iptv.gif?raw=true "IPTV")

(gif was cropped, modal will be centered)

This repository is a personal proof of concept for the usage of vue/vue-router/bootstrap-vue and will produce a website showing all channels from the [IPTV](https://github.com/iptv-org/iptv) repository, rendered using [node-red](https://nodered.org) and [uibuilder](https://flows.nodered.org/node/node-red-contrib-uibuilder); a node-red node that allows building custom websites that interact with node-red.

##### Requirements:

- node-red
- uibuilder
- non-chrome browser (as it does not seem to support HLS).


##### Installation:

- import the `iptv_flow.json` from the `flow` directory into node-red.
- edit the `change` node under "Set Filename - \*\*edit this\*\*", change the path where you want to store/read the iptv file from.
- clone this repository into the `.node-red/uibuilder` directory, or copy the individual files manually. The uibuilder node assumes `/tv`, you may need to rename this.


![Alt text](./resources/flow.jpg?raw=true "node-red flow")
