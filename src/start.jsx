
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { makeid, text2Binary, Vigenereencrypt, xorCipher } from "./functions";

export default function StartPage() {
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(0);
  const [showHintValue, setShowHintValue] = useState(0);
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { groupnumber } = location.state || {};

  // generate cipher, key‐name, encryption & binary on mount
  const { cipherText, name, toShow } = useMemo(() => {
    const ct = String("INCAMP" + makeid(8)).toUpperCase();
    const groups = [
  ["NATHAN LUKE GAMBOA CHONG JIA HAO", "KANNAN VITHAN", "Vegus Lim Zen Kng", "Dylan Nguyen Dang Khoa"],
  ["RANDALL THAW ZAE TUN", "TANG KE HONG ZACHARY", "Wong Wei Kai Lucas", "Annamalai Palaniappan"],
  ["XIE JINGXUAN", "GABRIEL LEE YU EN", "Sharlene Tan Qin Ying", "Gong Xiyue"],
  ["Chen Ke Shih", "NEAH SHIBIL", "Adam Zafir bin Mohammed Sudhir", "Teiw Yong Sheng Jayden"],
  ["Kang Jayl", "MASON TAN KOK YEOW", "Goh Rui Jie Thaddeus", "Aw Kai Bin, Zyden"],
  ["LIM YI SHU LEEROY", "QUEK HYUN EE", "Amelia Ng", "Dundar Shin Berkin"],
  ["TAN TECK JUN", "SEAN TAN BING XUAN", "LIM SHI HUI SERENE", "Lau Rei Yan Abigail"],
  ["TRINITY HAN JIEXIN", "LE SON TUNG", "RONG ZHICHENG MICHAEL", "Joseph Kevin Fredric"],
  ["LIM BO EN EDMUND", "Kyle Henric Buguina Chua", "CYRIL LIM JUN KAI", "Yang An Zhi"],
  ["KANJIRAPARAMBIL MENON PARVATHY", "TANG KE WEI DAVEON", "PHUA SER YEN", "Lee Jun Lei Adam"],
  ["POH JUN ZHE MATTHEW", "YAN BENG JIT BRYAN", "YONG JIA RUI EMMETT", "Alvarez Marco Lorenzo Tanzon"],
  ["EZEKIEL ONG KAI BIN", "TAY AN ZHI WAYNE", "ENRIQUE KO KO", "Evan Tan jing kai"],
  ["DRAYK TEH YUXIANG", "TEO ZHI KAI DARRYL", "Dessen Arwin Tan Ahn Joon", "Chuah Cheng Hang"],
  ["TOH JUN CHEN", "HANA CHEE", "Chong Meng Fai", "Thiha Linn Tun"],
  ["CHONG TANAKA KOUSUKE", "POTLURI MEDHANSH VEER", "GOH WEI KANG ISAAC", "Lai Hong Yu"],
  ["Ivaniuk Aleksandr", "Scott Travis Jayden", "Ashton Lim Jing Kai", "Yeo Shu Axelia"],
  ["OWEN SIAH", "MADALYN KERK YI LE", "Yip Jia Yi", "Goh Rae Pin"],
  ["NAI WEI YE XAVIER", "NG XING YU SEBASTIAN", "ARUN KUMAR HEMANSRIKAR", "Maximilian Peter Waechter"],
  ["SOO JIA QI ISAIAH", "ADHYA JAIN", "Lee Yu Zhe Travis", "Christopher Richard Mills"],
  ["ADEN SOH TIAN TSAO", "ELI HUANG YUKAI", "MOKASHI AARUSH NINAD", "Aaden Ng"],
  ["CHLOE LYNN ANNATASHYA SATYAWIJAYA", "ANG HAN SHENG WILFRED", "LEO MANSUKHANI", "Lim Zhe Hsien"],
  ["Vishaakan Kumar", "Tan Yu xuan Astral", "OH KAIXU", "Javier Wee Jia Wei"],
  ["LUIS ALEJANDRO VARGAS SIA", "TSANG ZI HENG", "Rafel Peh Zheng Yi", "Kenzo Gabriel Sutanto"],
  ["KIREN KESHAUN PILLAI / ISHAN SREEJITH", "LEE DELONG MATTHIAS MARC", "WINSON CHAI", "Vishnu Kannappan Palaniappan"],
  ["GOH XIN NI", "Lim Wen Hong", "Iresh Ramasamy", "Aldo Djojorahardjo"],
  ["Phua Xuan Zhi Ethan", "Isaac Woon Xin Wei", "Chew Aorong Zavier", "Cyril Lim Jun Kai"]
];
    const key = groups[groupnumber - 1]?.[Math.floor(Math.random() * 5)].trim() || "";
    const xored = xorCipher(ct, groupnumber);
    const vig = Vigenereencrypt(xored, key);
    return {
      cipherText: ct,
      name: key,
      toShow: text2Binary(vig)
    };
  }, [groupnumber]);

  function check() {
    if (answer === cipherText) {
      alert("Success! Please keep this alert open for verification");
      setSuccess(true);
    } else {
      alert("wrong ;-;");
    }
  }

  useEffect(() => {
    if (success) return;
    const id = setInterval(() => {
      setShowHint(v => v + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [success]);

  function showHintFunc() {
    if (showHint > 300) {
      setShowHintValue(1);
    }
  }

  return (
    <>
      {success ? (
        <p>Success! Cipher: {cipherText}</p>
      ) : (
        <p>Not successful yet ;-;</p>
      )}
      <p>{showHint} seconds elapsed</p>
      <p>Your Cipher (binary): {toShow}</p>
      <button onClick={showHintFunc}>
        Press here for hint (After 300 seconds)
      </button>
      <br /><br />
      <input
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />
      <br /><br />
      <button onClick={check}>Submit</button>
    </>
  );
}
