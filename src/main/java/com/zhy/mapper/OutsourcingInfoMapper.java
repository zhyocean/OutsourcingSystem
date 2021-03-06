package com.zhy.mapper;

import com.zhy.model.outsourcing.OutsourcingInfo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author: zhangocean
 * @Date: Created in 20:33 2018/3/3
 * Describe: 处理外包信息的数据库操作的sql语句
 */
@Mapper
@Repository
public interface OutsourcingInfoMapper {

    @Insert("insert into " +
            "outsourcinginfo(state,name,rank,category,content,publisher,publishTime,requirement,registrationDeadline,projectDeadline,amount,prospectus,progress,contract) " +
            "value(#{state},#{name},#{rank},#{category},#{content},#{publisher},#{publishTime},#{requirement},#{registrationDeadline},#{projectDeadline},#{amount},#{prospectus},#{progress},#{contract})")
    int saveOutsourcingInfo(OutsourcingInfo outsourcingInfo);

    @Select("select count(*) from outsourcinginfo where name like '%' #{searchText} '%'")
    int countSearchText(@Param("searchText") String searchText);

    @Select("select count(*) from outsourcinginfo")
    int countAll();

    @Select("select * from outsourcinginfo where name like '%' #{searchText} '%'")
    List<OutsourcingInfo> findBySearch(@Param("searchText") String searchText);

    @Select("select * from outsourcinginfo")
    List<OutsourcingInfo> findAllOutsourcing();

    @Select("select state from outsourcinginfo where name=#{name}")
    String selectStateByName(@Param("name") String name);

    @Select("select name from outsourcinginfo where id=#{id}")
    String selectNameById(@Param("id") int id);

    @Select("select * from outsourcinginfo where name=#{name}")
    OutsourcingInfo selectByName(@Param("name") String name);

    @Select("select o.name,o.rank from outsourcinginfo o where publisher=#{phone} and state=#{state}")
    List<OutsourcingInfo> getAllNameAndRankByPhoneAndState(@Param("phone") String phone, @Param("state") String state);

    @Select("select * from outsourcinginfo")
    List<OutsourcingInfo> getAllOutsourcing();

    @Select("select * from outsourcinginfo where id=#{id}")
    OutsourcingInfo getOutsourcingById(@Param("id") int id);

    @Select("select o.publisher from outsourcinginfo o where name=#{name}")
    String getPublisherByName(@Param("name") String name);
}
