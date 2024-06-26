"use client";
import React from "react";
import style from "./PhoneMenu.module.css";
import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { GrLineChart } from "react-icons/gr";
import { IoWalletSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowBackIosIcon
        sx={{ fontSize: "1.2rem", marginLeft: "7px", color: "var(--bg-icons)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "var(--bg-menu)",
  color: "var(--text-color)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(-90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0",
}));

export default function PhoneMenu({ closeMenu }) {
  return (
    <>
      <div className={style.parent}>
        <div className={style.menu_parent}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                دیجیتال کد های خریداری شده{" "}
                <GrLineChart className={style.icon} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className={style.ul}>
                  <li>اپل آیدی فوری(با آیکلود)</li>
                  <li>اپل آیدی فوری(بدون آیکلود)</li>
                  <li>اپل آیدی پلاس</li>
                  <li>اپل آیدی حقیقی</li>
                  <li>گیفت کد</li>
                  <li style={{ padding: "0" }}>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="subPanel1d-content"
                        id="subPanel1d-header"
                      >
                        <Typography>انواع اکانت</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul className={style.ul}>
                            <li>اکانت StorelIP</li>
                            <li>اکانت CiscolIP</li>
                            <li>اکانت openVPN</li>
                            <li>اکانت VIPIP</li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li>لایسنس</li>
                  <li>آنلاک اپل آیدی کارتی</li>
                  <li>آنلاک سرویس</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                خدمات مالی <IoWalletSharp className={style.icon} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className={style.ul}>
                  <li>تراکنش مالی</li>
                  <li>ریز مبادلات</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                تیکت ها <MdOutlineMessage className={style.icon} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className={style.ul}>
                  <li>ارسال تیکت جدید</li>
                  <li>لیست تیکت ها</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div
          className={style.blank_parent}
          onClick={() => closeMenu(false)}
        ></div>
      </div>
    </>
  );
}
