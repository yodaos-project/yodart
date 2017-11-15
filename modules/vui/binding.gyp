{
  "targets": [{
    "target_name": "speech_down",
    "include_dirs": [
      "<!(node -e \"require('nan')\")",
      "./src",
    ],
    "sources": [
      "src/SpeechWrap.cc",
    ],
    "defines": [
      "USE_EMBEDDABLE=true"
    ],
    "cflags!": [ "-fno-exceptions", "-fno-rtti" ],
    "cflags_cc!": [ "-fno-exceptions", "-fno-rtti", "-std=c++11" ],
    "libraries": [
      "-lrkopenvoice",
      "-landroid_binder",
      "-landroid_utils",
      "-landroid_cutils", 
      "-landroid_hardware",
    ],
  }]
}