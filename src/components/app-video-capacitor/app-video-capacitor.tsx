import { Component, ComponentInterface, Host, h, Prop, Listen } from '@stencil/core';
import * as VideoPlayer from 'capacitor-video-player';


@Component({
  tag: 'app-video-capacitor',
  styleUrl: 'app-video-capacitor.css',
  shadow: true,
})
export class AppVideoCapacitor implements ComponentInterface {
  @Prop() vtype: string;

  private _url: string = null;
  private _mp4: string = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  //private _hls: string = "https://irtdashreference-i.akamaihd.net/dash/live/901161/keepixo1/playlistBR.m3u8";
  //private _hls: string = "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8";
  //private _hls: string = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
  private _hls: string = "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8";
  private _videoPlayer: any = null;

  @Listen('jeepCapVideoPlayerPlay', { target: 'document' })
  playerPlayHandler(ev:CustomEvent) {
    console.log('video start playing ', ev.detail)
  }
  @Listen('jeepCapVideoPlayerPause', { target: 'document' })
  playerPauseHandler(ev:CustomEvent) {
    console.log('video pause ', ev.detail)
  }
  @Listen('jeepCapVideoPlayerEnded', { target: 'document' })
  playerEndHandler(ev:CustomEvent) {
    console.log('video ended ', ev.detail)
    const navEl:HTMLIonNavElement = document.querySelector("ion-nav");
    navEl.pop();
  }
  @Listen('jeepCapVideoPlayerExit', { target: 'document' })
  playerExitHandler(ev:CustomEvent) {
    console.log('video exit ', ev.detail)
    const navEl:HTMLIonNavElement = document.querySelector("ion-nav");
    navEl.pop();
  }

  componentWillLoad() {
    this._videoPlayer = VideoPlayer.CapacitorVideoPlayer;
    switch (this.vtype) {
      case "mp4" : {
        this._url = this._mp4;
        break;
      }
      case "hls" : {
        this._url = this._hls;
        break;
      }
      default : {
        this._url = null;
      }
    }
  }

  async componentDidLoad() {
    if(this._url != null) {
      await this._videoPlayer.initPlayer({mode:"fullscreen",url:this._url,playerId:"fullscreen",componentTag:"app-video-capacitor"});
    } else {
      console.log("Video format not compatible");
    }
  }

  render() {
    return (
      <Host>
        <slot>
          <div id="fullscreen">

          </div>
        </slot>
      </Host>
    );
  }

}
