//TODO: Implement hexToRgb
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // anticipate three character hex str input e.g. #F00
  if (hex.length === 3) {
    let hexr = hex[0];
    let hexg = hex[1];
    let hexb = hex[2];
    return hexToRgb(`${hexr}${hexr}${hexg}${hexg}${hexb}${hexb}`);
  }
  // assume six character hex str input e.g. #FF0000
  let [r, g, b] = [0, 2, 4]
    // separate hex into 2 char offset color channels
    .map(offset => hex.substring(offset, offset + 2)) // ['FF', '00', '00']
    // convert hex channel str to a base 16 int
    .map(hexChannel => parseInt(hexChannel, 16)); // [255, 0, 0]
  return { r, g, b }; // { r: 255, g: 0, b: 0 }
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
  // anticipate three int input e.g. 255, 0, 0
  return (
    [r, g, b]
      // convert each dec channel int to a 16 radix hex str
      // bound possible input ints between 0 --> 255
      .map(decChannel => Math.max(0, Math.min(255, decChannel)).toString(16)) // ['FF', '00', '00']
      // pad single digit hex channel with leading 0
      .map(hexChannel => (hexChannel.length === 1 ? `0${hexChannel}` : hexChannel))
      // join strs
      .join('')
  ); // 'FF0000'
}
