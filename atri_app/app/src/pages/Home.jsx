import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useTextBox5Cb, useFlex2Cb, useTextBox7Cb, useTextBox8Cb, useImage2Cb, useTextBox9Cb, useDropdown3Cb, useDiv1Cb, useTextBox15Cb, useFlex3Cb, useTextBox17Cb, useTextBox18Cb, useTextBox19Cb, useLink1Cb, useImage3Cb, useFlex4Cb, useTextBox20Cb, useTextBox21Cb, useTextBox22Cb, useLink2Cb, useImage5Cb, useFlex7Cb, useTextBox23Cb, useTextBox27Cb, useTextBox28Cb, useLink3Cb, useImage6Cb, useImage7Cb, useLink4Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useFlex8Cb, useLink5Cb, useFlex11Cb, useTextBox34Cb, useTextBox35Cb, useLink6Cb, useImage8Cb, useFlex12Cb, useTextBox36Cb, useTextBox38Cb, useFlex13Cb, useDiv2Cb, useDiv3Cb, useDiv4Cb, useDiv5Cb, useDiv6Cb, useDiv7Cb, useFlex14Cb, useImage9Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useTextBox42Cb, useImage10Cb, useFlex20Cb, useImage11Cb, useTextBox43Cb, useTextBox44Cb, useFlex21Cb, useTextBox45Cb, useTextBox46Cb, useImage12Cb, useFlex22Cb, useTextBox47Cb, useTextBox48Cb, useImage13Cb, useFlex23Cb, useImage14Cb, useTextBox49Cb, useTextBox50Cb, useFlex24Cb, useTextBox54Cb, useFlex26Cb, useLink7Cb, useFlex27Cb, useFlex28Cb, useImage16Cb, useTextBox55Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useImage17Cb, useFlex29Cb, useFlex30Cb, useFlex31Cb, useFlex32Cb, useImage18Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useFlex33Cb, useFlex34Cb, useFlex35Cb, useTextBox63Cb, useTextBox64Cb, useTextBox66Cb, useInput1Cb, useFlex38Cb, useFlex39Cb, useFlex40Cb, useFlex41Cb, useTextBox68Cb, useTextBox69Cb, useTextBox70Cb, useTextBox75Cb, useTextBox76Cb, useTextBox77Cb, useTextBox78Cb, useTextBox80Cb, useTextBox84Cb, useTextBox86Cb, useTextBox87Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useTextBox91Cb, useTextBox92Cb, useTextBox93Cb, useTextBox94Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, useFlex42Cb, useTextBox107Cb, useTextBox108Cb, useFlex43Cb, useTextBox110Cb, useTextBox112Cb } from "../page-cbs/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Dropdown3Props = useStore((state)=>state["Home"]["Dropdown3"]);
const Dropdown3IoProps = useIoStore((state)=>state["Home"]["Dropdown3"]);
const Dropdown3Cb = useDropdown3Cb()
const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Link2Props = useStore((state)=>state["Home"]["Link2"]);
const Link2IoProps = useIoStore((state)=>state["Home"]["Link2"]);
const Link2Cb = useLink2Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Link3Props = useStore((state)=>state["Home"]["Link3"]);
const Link3IoProps = useIoStore((state)=>state["Home"]["Link3"]);
const Link3Cb = useLink3Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Link4Props = useStore((state)=>state["Home"]["Link4"]);
const Link4IoProps = useIoStore((state)=>state["Home"]["Link4"]);
const Link4Cb = useLink4Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Link5Props = useStore((state)=>state["Home"]["Link5"]);
const Link5IoProps = useIoStore((state)=>state["Home"]["Link5"]);
const Link5Cb = useLink5Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Link6Props = useStore((state)=>state["Home"]["Link6"]);
const Link6IoProps = useIoStore((state)=>state["Home"]["Link6"]);
const Link6Cb = useLink6Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Div2Props = useStore((state)=>state["Home"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Home"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Div4Props = useStore((state)=>state["Home"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["Home"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Link7Props = useStore((state)=>state["Home"]["Link7"]);
const Link7IoProps = useIoStore((state)=>state["Home"]["Link7"]);
const Link7Cb = useLink7Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()

  return (<>
  <TextBox {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<Flex {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<Flex {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
</Flex>
<TextBox {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Flex>
<Flex {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Image {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
<TextBox {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Dropdown {...Dropdown3Props} {...Dropdown3Cb} {...Dropdown3IoProps}/>
</Flex>
<Div {...Div1Props} {...Div1Cb} {...Div1IoProps}/>
<TextBox {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<Flex {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<TextBox {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<TextBox {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<Link {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
<Image {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
<Flex {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<TextBox {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<Link {...Link2Props} {...Link2Cb} {...Link2IoProps}/>
<Image {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
<Flex {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Link {...Link3Props} {...Link3Cb} {...Link3IoProps}/>
<Image {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex>
<Flex {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Link {...Link4Props} {...Link4Cb} {...Link4IoProps}/>
<Image {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Flex>
<Link {...Link5Props} {...Link5Cb} {...Link5IoProps}/>
<Flex {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Image {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<Link {...Link6Props} {...Link6Cb} {...Link6IoProps}/>
</Flex>
<Flex {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<TextBox {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex>
<Flex {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Div {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<Flex {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Flex>
</Div>
<Div {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Flex {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
</Div>
<Div {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<Flex {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<TextBox {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex>
</Div>
<Div {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Flex {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Image {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<TextBox {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex>
</Div>
<Div {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Flex {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Image {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Flex>
</Div>
<Div {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<Flex {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Image {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
</Div>
</Flex>
<Flex {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Link {...Link7Props} {...Link7Cb} {...Link7IoProps}/>
</Flex>
<Flex {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
<Image {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
<Flex {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Flex {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<TextBox {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex>
<Image {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
<Flex {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Flex {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<TextBox {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex>
<Image {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex>
<Flex {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Flex {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Input {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<TextBox {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex>
<Flex {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Flex {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex>
<Flex {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<TextBox {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<TextBox {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
<TextBox {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<TextBox {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Flex>
<Flex {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<TextBox {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<TextBox {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<TextBox {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex>
</Flex>
<Flex {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<TextBox {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Flex>
</Flex>
  </>);
}
