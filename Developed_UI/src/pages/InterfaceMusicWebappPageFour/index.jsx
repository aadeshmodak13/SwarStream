import React from "react";

import { Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const InterfaceMusicWebappPageFourPage = () => {
  const [framethreevalue, setFramethreevalue] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-ptsans sm:gap-5 md:gap-5 items-center justify-start mx-auto px-0.5 w-full">
        <div className="bg-black-900_01 flex flex-col h-[1080px] md:h-auto items-start justify-start p-10 md:px-5 w-[287px]">
          <div className="flex flex-col gap-[42px] justify-start w-full">
            <div className="flex flex-col gap-[25px] justify-start md:ml-[0] ml-[11px] w-[82%] md:w-full">
              <div className="flex flex-row gap-[7px] items-start justify-between w-full">
                <Img
                  className="h-8 md:h-auto mt-[65px] object-cover w-1"
                  src="images/img_frame6.png"
                  alt="frameSix"
                />
                <div className="flex flex-col gap-[19px] items-start justify-start w-48">
                  <div className="flex flex-row gap-3 items-end justify-start w-auto">
                    <Img
                      className="h-[34px] w-[30px]"
                      src="images/img_music.svg"
                      alt="music"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPTSansBold24"
                    >
                      Swarstream
                    </Text>
                  </div>
                  <Line className="bg-gray-900 h-px w-full" />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_home.svg"
                        alt="home"
                      />
                      <Text
                        className="text-base text-light_blue-500 w-auto"
                        size="txtPTSansBold16"
                      >
                        Home
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_music_gray_700.svg"
                        alt="music_One"
                      />
                      <Text
                        className="text-base text-gray-700 w-auto"
                        size="txtPTSansRegular16"
                      >
                        Album
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-900 h-px w-full" />
                  <Text
                    className="text-base text-gray-700 uppercase w-auto"
                    size="txtPTSansBold16Gray700"
                  >
                    Discovery
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="text-base text-gray-700 w-auto"
                        size="txtPTSansRegular16"
                      >
                        Singer
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="text-base text-gray-700 w-auto"
                        size="txtPTSansRegular16"
                      >
                        Genre
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-900 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[11px] w-[66%] md:w-full">
                <Text
                  className="text-base text-gray-600 uppercase w-auto"
                  size="txtPTSansBold16Gray600"
                >
                  My playlist
                </Text>
                <div className="flex flex-col gap-4 h-[163px] md:h-auto items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="bg-purple-100 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPTSansRegular16"
                    >
                      Love
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="bg-gray-700_01 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPTSansRegular16"
                    >
                      Sad List
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="bg-deep_purple-A200 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPTSansRegular16"
                    >
                      Gaming & Sports
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <div className="bg-red-700 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPTSansRegular16"
                    >
                      EDM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtPTSansRegular16"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient  flex flex-col items-end justify-start p-[9px] rounded-[16px] w-full">
              <div className="flex flex-col gap-[33px] items-center justify-start my-[33px] w-[91%] md:w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-[210px]">
                  <div className="bg-blue_gray-100 h-10 rounded-lg w-10"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPTSansBold14"
                  >
                    At my worst
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-[210px]">
                  <div className="bg-blue_gray-100 h-10 rounded-lg w-10"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPTSansBold14"
                  >
                    Don’t let me down
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-[210px]">
                  <div className="bg-blue_gray-100 h-10 rounded-lg w-10"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPTSansBold14"
                  >
                    Safari - Serena
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-[210px]">
                  <div className="bg-blue_gray-100 h-10 rounded-lg w-10"></div>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPTSansBold14"
                  >
                    Let me love you
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[1076px] h-[1080px] md:px-5 relative w-[62%] md:w-full">
          <Input
            name="frameThree"
            placeholder="Search by artists, songs or albums"
            value={framethreevalue}
            onChange={(e) => setFramethreevalue(e)}
            className="leading-[normal] p-0 placeholder:text-gray-700_02 sm:pr-5 text-base text-gray-700_02 text-left w-full"
            wrapClassName="absolute bg-gray-900_01 flex mr-[212px] mt-10 pb-3.5 pl-4 pr-[35px] pt-[17px] right-[0] rounded-[12px] top-[0] w-[51%]"
            prefix={
              <div className="h-[18px] mb-[3px] mr-[11px] w-[18px] outline-gray-700_02 outline-[0.5px] outline bottom-[0] right-[1%] absolute">
                <Img
                  className="cursor-pointer h-[18px] absolute my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
            }
            suffix={
              <CloseSVG
                fillColor="#5e6666"
                className="cursor-pointer h-[18px] absolute my-auto"
                onClick={() => setFramethreevalue("")}
                style={{
                  visibility:
                    framethreevalue?.length <= 0 ? "hidden" : "visible",
                }}
                height={18}
                width={18}
                viewBox="0 0 18 18"
              />
            }
          ></Input>
          <div className="absolute bg-gradient1  flex flex-col gap-[35px] h-full inset-[0] items-center justify-center m-auto p-[52px] md:px-10 sm:px-5 rounded-[12px] w-full">
            <div className="bg-gradient2  flex flex-col items-center justify-end mt-16 p-[21px] sm:px-5 rounded-[16px] w-[98%] md:w-full">
              <Img
                className="h-[621px] sm:h-auto mt-[7px] object-cover rounded-[30px] w-[621px] md:w-full"
                src="images/img_atmyworstremix1024x1024.png"
                alt="atmyworstremixOne"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtPTSansBold36"
              >
                At my worst - Kehlani Remix
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700_99 sm:text-xl"
                size="txtPTSansRegular24"
              >
                Pink Sweats
              </Text>
              <div className="flex flex-col items-center justify-start mt-[25px] w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <Img
                    className="h-px"
                    src="images/img_musicrunning.svg"
                    alt="musicrunning"
                  />
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-[95%] md:w-full">
                    <Text
                      className="mb-[5px] text-base text-center text-white-A700"
                      size="txtPTSansRegular16WhiteA700"
                    >
                      1:24
                    </Text>
                    <Text
                      className="mt-[5px] text-base text-center text-white-A700"
                      size="txtPTSansRegular16WhiteA700"
                    >
                      3:20
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center ml-52 md:ml-[0] mt-[5px] w-[28%] md:w-full">
                <Img
                  className="h-[13px]"
                  src="images/img_computer.svg"
                  alt="computer"
                />
                <div className="flex flex-col items-center justify-start ml-[11px] rotate-[-180deg] w-[21%]">
                  <div className="h-[46px] relative w-full">
                    <Img
                      className="h-[49px] m-auto object-cover w-full"
                      src="images/img_group3_46x54.png"
                      alt="groupThree"
                    />
                    <Img
                      className="absolute h-4 inset-[0] justify-center m-auto w-4"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[61px] items-end justify-end ml-3 p-[19px] rounded-[3px] w-[62px]"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[22px] rounded-[1px]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                </div>
                <div className="flex flex-col items-center justify-start ml-[11px] w-[21%]">
                  <div className="h-[49px] relative w-full">
                    <Img
                      className="h-[45px] m-auto object-cover w-full"
                      src="images/img_group3_49x54.png"
                      alt="groupThree_One"
                    />
                    <Img
                      className="absolute h-[18px] inset-[0] justify-center m-auto"
                      src="images/img_play.svg"
                      alt="play"
                    />
                  </div>
                </div>
                <Img
                  className="h-6 ml-[11px]"
                  src="images/img_favorite.svg"
                  alt="favorite"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black-900_01 flex flex-col gap-3.5 justify-center p-[19px] md:px-5 w-[24%] md:w-full">
          <div className="border border-solid flex flex-col h-[75px] items-center justify-start light_blue_500_light_blue_500_63_border md:ml-[0] ml-[330px] mt-2 p-1.5 rotate-[63deg] rounded-[37px] w-[75px]">
            <div className="bg-blue_gray-100 h-[61px] rounded-[30px] w-[61px]"></div>
          </div>
          <div className="bg-gradient2  flex flex-col items-center justify-end mb-[137px] p-[45px] md:px-10 sm:px-5 rounded-[16px]">
            <Text
              className="italic mb-[18px] mt-[143px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtPTSansBoldItalic30"
            >
              <>
                Can I call you baby?
                <br />
                Can you be my friend?
                <br />
                Can you be my lover <br />
                up until the very end?
                <br />
                Let me show you love,
                <br />
                oh, no pretend. <br />
                Stick by my side even when the world is caving in, yeah
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterfaceMusicWebappPageFourPage;
