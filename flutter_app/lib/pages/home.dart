import 'package:flutter/material.dart';
import 'package:flutter_app/models/category_model.dart';
import 'package:flutter_app/models/diet_model.dart';
import 'package:flutter_app/models/popular_model.dart';
import 'package:flutter_svg/svg.dart';

class HomePage extends StatelessWidget {
  HomePage({super.key});

  List<CategoryModel> categories = [];
  List<DietModel> diets = [];
  List<PopularDietsModel> popularDiets = [];

  void _getInitialInfo() {
    categories = CategoryModel.getCategories();
    diets = DietModel.getDiets();
    popularDiets = PopularDietsModel.getPopularDiets();
  }

  @override
  Widget build(BuildContext context) {
    _getInitialInfo();
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: appBar(),
      body: ListView(
        children: [
          _searchField(),
          SizedBox(height: 40),
          _categorySection(),
          SizedBox(height: 40),
          _dietsSection(),
          SizedBox(height: 40),
          _popularSection(),
        ],
      ),
    );
  }

  Column _popularSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildPopularSectionHeader(),
        SizedBox(height: 15),
        _buildPopularSectionListItem(),
      ],
    );
  }

  ListView _buildPopularSectionListItem() {
    return ListView.separated(
      itemCount: popularDiets.length,
      shrinkWrap: true,
      separatorBuilder: (context, index) => SizedBox(height: 25),
      padding: EdgeInsets.only(left: 20, right: 20),
      itemBuilder: (context, index) {
        return Container(
          height: 100,
          decoration: BoxDecoration(
            color: popularDiets[index].boxIsSelected
                ? Colors.white
                : Colors.transparent,
            borderRadius: BorderRadius.circular(16),
            boxShadow: popularDiets[index].boxIsSelected
                ? [
                    BoxShadow(
                      color: Color(0xff1D1617).withOpacity(0.07),
                      offset: Offset(0, 10),
                      blurRadius: 40,
                      spreadRadius: 0,
                    ),
                  ]
                : [],
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              SvgPicture.asset(popularDiets[index].iconPath),
              _buildPopularItemInfo(index),
              _buildPopularItemButton(),
            ],
          ),
        );
      },
    );
  }

  Column _buildPopularItemInfo(int index) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          popularDiets[index].name,
          style: TextStyle(
            fontWeight: FontWeight.w500,
            color: Colors.black,
            fontSize: 16,
          ),
        ),
        Text(
          popularDiets[index].level +
              ' | ' +
              popularDiets[index].duration +
              ' | ' +
              popularDiets[index].calories,
          style: TextStyle(
            color: Color(0xff7B6F72),
            fontSize: 13,
            fontWeight: FontWeight.w400,
          ),
        ),
      ],
    );
  }

  GestureDetector _buildPopularItemButton() {
    return GestureDetector(
      onTap: () {},
      child: SvgPicture.asset('assets/icons/button.svg', width: 30, height: 30),
    );
  }

  Padding _buildPopularSectionHeader() {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Text(
        'Popular',
        style: TextStyle(
          color: Colors.black,
          fontSize: 18,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Column _dietsSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildDietSectionHeading(),
        SizedBox(height: 15),
        _buildDietList(),
      ],
    );
  }

  Container _buildDietList() {
    return Container(
      height: 240,
      child: ListView.separated(
        itemBuilder: (context, index) {
          return Container(
            width: 210,
            decoration: BoxDecoration(
              color: diets[index].boxColor.withOpacity(0.3),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                SvgPicture.asset(diets[index].iconPath),
                _buildDietItemName(index),
                _buildDietItemInfo(index),
              ],
            ),
          );
        },
        separatorBuilder: (context, index) => SizedBox(width: 25),
        itemCount: diets.length,
        scrollDirection: Axis.horizontal,
        padding: EdgeInsets.only(left: 20, right: 20),
      ),
    );
  }

  Container _buildDietItemInfo(int index) {
    return Container(
      height: 45,
      width: 130,
      child: Center(
        child: Text(
          'View',
          style: TextStyle(
            color: diets[index].viewIsSelected
                ? Colors.white
                : Color(0xffC58BF2),
            fontWeight: FontWeight.w600,
            fontSize: 14,
          ),
        ),
      ),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            diets[index].viewIsSelected
                ? Color(0xff9DCEFF)
                : Colors.transparent,
            diets[index].viewIsSelected
                ? Color(0xff82A3FD)
                : Colors.transparent,
          ],
        ),
        borderRadius: BorderRadius.circular(50),
      ),
    );
  }

  Column _buildDietItemName(int index) {
    return Column(
      children: [
        Text(
          diets[index].name,
          style: TextStyle(
            fontWeight: FontWeight.w500,
            color: Colors.black,
            fontSize: 16,
          ),
        ),
        Text(
          diets[index].level +
              ' | ' +
              diets[index].duration +
              ' | ' +
              diets[index].calories,
          style: TextStyle(
            color: Color(0xff7B6F72),
            fontSize: 13,
            fontWeight: FontWeight.w400,
          ),
        ),
      ],
    );
  }

  Padding _buildDietSectionHeading() {
    return Padding(
      padding: const EdgeInsets.only(left: 20),
      child: Text(
        'Recommendation\nfor Diet',
        style: TextStyle(
          color: Colors.black,
          fontSize: 18,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Column _categorySection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _categoryHeader(),
        Container(
          height: 120,
          child: ListView.separated(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            scrollDirection: Axis.horizontal,
            itemCount: categories.length,
            separatorBuilder: (_, __) => const SizedBox(width: 25),
            itemBuilder: (context, index) => _buildCategoryItem(index),
          ),
        ),
      ],
    );
  }

  Widget _categoryHeader() {
    return const Padding(
      padding: EdgeInsets.all(8.0),
      child: Text(
        'Category',
        style: TextStyle(
          color: Colors.black,
          fontSize: 18,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Widget _buildCategoryItem(int index) {
    final item = categories[index];
    return Container(
      width: 100,
      decoration: BoxDecoration(
        color: item.boxColor.withOpacity(0.3),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 50,
            height: 50,
            decoration: const BoxDecoration(
              color: Colors.white,
              shape: BoxShape.circle,
            ),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: SvgPicture.asset(item.iconPath),
            ),
          ),
          Text(
            item.name,
            style: const TextStyle(
              fontWeight: FontWeight.w400,
              color: Colors.black,
              fontSize: 14,
            ),
          ),
        ],
      ),
    );
  }

  Container _searchField() {
    return Container(
      margin: EdgeInsets.only(top: 40, left: 20, right: 20),
      decoration: BoxDecoration(
        boxShadow: [
          BoxShadow(
            color: Color(0xff1D1617).withOpacity(0.11),
            blurRadius: 40,
            spreadRadius: 0.0,
          ),
        ],
      ),
      child: TextField(
        decoration: InputDecoration(
          filled: true,
          fillColor: Colors.white,
          contentPadding: EdgeInsets.all(15),
          hintText: 'Search Pancake',
          hintStyle: TextStyle(color: Color(0xffDDDADA), fontSize: 14),
          prefixIcon: _buildPreFixIcon(),
          suffixIcon: _buildSuffixIcon(),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(15),
            borderSide: BorderSide.none,
          ),
        ),
      ),
    );
  }

  Container _buildSuffixIcon() {
    return Container(
      width: 100,
      child: IntrinsicHeight(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            VerticalDivider(
              color: Color(0xffDDDADA),
              thickness: 0.1,
              endIndent: 10,
              indent: 10,
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: SvgPicture.asset('assets/icons/Filter.svg'),
            ),
          ],
        ),
      ),
    );
  }

  Padding _buildPreFixIcon() {
    return Padding(
      padding: const EdgeInsets.all(12.0),
      child: SvgPicture.asset('assets/icons/Search.svg'),
    );
  }

  AppBar appBar() {
    return AppBar(
      title: Text(
        'Breakfast',
        style: TextStyle(
          color: Colors.black,
          fontSize: 18,
          fontWeight: FontWeight.bold,
        ),
      ),
      backgroundColor: Colors.white,
      centerTitle: true,
      leading: _buildLeadingIcon(),
      actions: [_buildActionIcon()],
    );
  }

  GestureDetector _buildActionIcon() {
    return GestureDetector(
      onTap: () {},
      child: Container(
        alignment: Alignment.center,
        margin: EdgeInsets.all(10),
        width: 37,
        child: SvgPicture.asset('assets/icons/dots.svg', height: 5, width: 5),
        decoration: BoxDecoration(
          color: Color(0xffF7F8F8),
          borderRadius: BorderRadius.circular(10),
        ),
      ),
    );
  }

  GestureDetector _buildLeadingIcon() {
    return GestureDetector(
      onTap: () {},
      child: Container(
        alignment: Alignment.center,
        margin: EdgeInsets.all(10),
        child: SvgPicture.asset(
          'assets/icons/Arrow - Left 2.svg',
          height: 20,
          width: 20,
        ),
        decoration: BoxDecoration(
          color: Color(0xffF7F8F8),
          borderRadius: BorderRadius.circular(10),
        ),
      ),
    );
  }
}
