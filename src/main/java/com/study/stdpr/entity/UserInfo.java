package com.study.stdpr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "user_info")
public class UserInfo {
    @Id
    String UserId;          // 사용자 ID

    String password;        // 접속비밀번호
    String userName;        // 사용자명(닉네임)
    String authGrpCd;       // 사용자권한그룹코드
    String mailAddr;        // E-MAIL 주소
    int age;                // 나이
    char sexCd;             // 성별코드
    String chkPsnlInfo;     // 개인정보동의여부
    String regiDt;          // 가입일자
    String pwChangedDt;     // 비밀번호 변경일자
    char status;            // 회원상태
}
